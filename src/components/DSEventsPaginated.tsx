import * as React from 'react';
import { DSEvent } from '../model/DSEvent';
import { Box, Pagination, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Description, EventsListImage } from './CommonComponents';
import DateUtils from '../utilities/DateUtils';

export interface DSEventsPaginatedProps {
    events: DSEvent[]
}

export default function DSEventsPaginated({ events, ...props }: DSEventsPaginatedProps) {

    const theme = useTheme()

    const [data, setData] = React.useState<DSEvent[]>([]);
    const [pageData, setPageData] = React.useState<DSEvent[]>([]);
    const [pageCount, setPageCount] = React.useState<number>(0);

    const PER_PAGE = 5;
    const EVENT_HEIGHT = 180

    React.useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        let result = []
        for (let i = 0; i < 50; i++) {
            let event = { ...events[0] }
            event.title += ' ' + (i + 1)
            result.push(event)
        }
        setPageCount(Math.ceil(result.length / PER_PAGE))
        setData(result)

    }

    React.useEffect(() => {
        pickPageData(1)
    }, [data]);

    const pickPageData = (page: number) => {

        let beginIndex = 0
        let endIndex = 0

        beginIndex = (page - 1) * PER_PAGE
        endIndex = beginIndex + PER_PAGE

        let result = data.slice(beginIndex, endIndex)

        setPageData(result)

        window.scrollBy(0, -(PER_PAGE - 1) * EVENT_HEIGHT)
    }

    const onPageChangedListener = (event: any, page: number) => {
        pickPageData(page)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {pageData.map((event: DSEvent) => (
                <Paper elevation={3} sx={{ width: '100%', marginBottom: theme.spacing(1), boxSizing: 'border-box' }}>
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
                            <Description dangerouslySetInnerHTML={{ __html: event.description }} />
                        </Stack>
                    </Box>
                </Paper>
            ))}
            <Pagination count={pageCount} color="primary" sx={{ alignSelf: 'center' }} onChange={onPageChangedListener} />
        </Box>
    )
}