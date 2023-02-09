import * as React from 'react';
import { DSEvent } from '../model/DSEvent';
import { List, ListItem, Box, Typography, useTheme, Button, Paper, Stack, Avatar, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Description, EventsListImage } from './CommonComponents';
import DateUtils from '../utilities/DateUtils';

export interface DSEventsInfiniteScrollListProps {
    events: DSEvent[]
}

export const EVENT_HEIGHT = 180

export default function DSEventsInfiniteScrollList({ events, ...props }: DSEventsInfiniteScrollListProps) {

    const navigate = useNavigate()

    const theme = useTheme()

    const [sEvents, setSEvents] = React.useState<DSEvent[]>(events)

    const listEl = React.useRef<HTMLUListElement | null>(null)

    const [loading, setLoading] = React.useState(false)
    const [hasMore] = React.useState(true)


    const loadMore = React.useCallback(() => {
        const loadItems = async () => {
            await new Promise<void>(resolve =>
                setTimeout(() => {
                    setSEvents(previous =>
                        previous.concat(events)
                    )
                    setLoading(false)
                    resolve()
                }, 2000)
            )
        }
        setLoading(true)
        const listRef = listEl.current
        if (listRef !== null && listRef !== undefined) {
            listRef.scrollBy(0, +EVENT_HEIGHT)
        }
        loadItems()
    }, [sEvents])

    const scrollListener = React.useCallback(() => {

        const listRef = listEl.current
        if (listRef !== null && listRef !== undefined) {

            const scrollDistance = listRef.clientHeight + listRef.scrollTop

            if (scrollDistance === listRef.scrollHeight && hasMore && !loading) {
                loadMore()
            }
        }
    }, [hasMore, loadMore, loading])

    React.useEffect(() => {
        const listRef = listEl.current
        if (listRef !== null && listRef !== undefined) {
            listRef.addEventListener('scroll', scrollListener)
        }
        return () => {
            if (listRef !== null && listRef !== undefined) {
                listRef.removeEventListener('scroll', scrollListener)
            }
        }
    }, [])

    const renderItem = (event: DSEvent) => {
        return (<ListItem disableGutters sx={{
            width: '100%',
        }}>
            <Paper elevation={3} sx={{ width: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                            height: EVENT_HEIGHT * 2,
                        },
                        [theme.breakpoints.up('md')]: {
                            flexDirection: 'row',
                            height: EVENT_HEIGHT,
                        }
                    }}>
                    <EventsListImage src={event.coverPhotoUrl} sx={{ width: 320, height: 180, alignSelf: 'center' }}></EventsListImage>
                    <Stack direction='column' sx={{ padding: theme.spacing(2), flexGrow: 1, overflow: 'hidden' }}>
                        <Typography
                            variant='body1'
                            sx={{ paddingBottom: theme.spacing(1), fontWeight: 'bold' }}
                        >{event.title}</Typography>
                        <Typography
                            variant='body2'
                            sx={{ paddingBottom: theme.spacing(1) }}
                        >{DateUtils.getDateFromTimestamp(event.date)}</Typography>
                        {Description(event.description)}
                    </Stack>
                </Box>
            </Paper>
        </ListItem>
        )
    }

    const renderLoadingItem = () => {
        return (
            <ListItem disableGutters>
                <Paper elevation={3} sx={{ width: '100%' }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: EVENT_HEIGHT,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                        <CircularProgress sx={{ width: '54px', hieght: '54px', alignSelf: 'center' }} />
                    </Box>
                </Paper>
            </ListItem>
        )
    }

    return (
        <List
            ref={listEl}
            disablePadding
            sx={{
                height: 4 * EVENT_HEIGHT,
                overflowY: 'auto',
                paddingRight: theme.spacing(1)
            }}
        >
            {sEvents.map((event: DSEvent) => renderItem(event))}
            {loading && renderLoadingItem()}
        </List >
    )
}