import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { DSEvent } from '../model/DSEvent';
import { Box, Pagination, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Description, EventsListImage } from './CommonComponents';
import DateUtils from '../utilities/DateUtils';

export interface DSEventsPaginatedProps {
    events: DSEvent[]
}

export const EVENT_HEIGHT = 180

export default function DSEventsPaginated({ events, ...props }: DSEventsPaginatedProps) {

    const theme = useTheme()
    const dsEvents = events

    const [currentPage, setCurrentPage] = React.useState(0);
    const [data, setData] = React.useState<DSEvent[]>([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch("https://ihsavru.me/Demo/uploads.json")
            .then((res) => res.json())
            .then((data) => {
                let result: DSEvent[] = []
                for (let i = 0; i < 10; i++) {
                    result.concat(events)
                }
                setData(events)
            });
    }

    const PER_PAGE = 5;

    const offset = currentPage * PER_PAGE;

    const pageCount = Math.ceil(data.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }: { selected: number }) {
        setCurrentPage(selectedPage);
    }

    return (
        <>
            {dsEvents.map((event: DSEvent) => (
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
                            <Description dangerouslySetInnerHTML={{ __html: event.description }} />
                        </Stack>
                    </Box>
                </Paper>
            ))}
            <Pagination count={10} color="primary" />
        </>
    )
}