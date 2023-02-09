import * as React from 'react';
import { DSEvent } from '../model/DSEvent';
import { Box, Pagination, Paper, Stack, Typography, useTheme, Grid } from '@mui/material';
import { Description, EventsListImage } from './CommonComponents';
import DateUtils from '../utilities/DateUtils';
import DSEventsItem from './DSEventsItem';

export interface DSEventsPaginatedProps {
    events: DSEvent[]
}

export default function DSEventsPaginated({ events, ...props }: DSEventsPaginatedProps) {

    const theme = useTheme()

    const topRef = React.useRef<HTMLDivElement>();
    const [data, setData] = React.useState<DSEvent[]>([]);
    const [pageData, setPageData] = React.useState<DSEvent[]>([]);
    const [pageCount, setPageCount] = React.useState<number>(0);

    const PER_PAGE = 6;

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

        topRef.current?.scrollIntoView()
    }

    const onPageChangedListener = (event: any, page: number) => {
        pickPageData(page)
    }

    const renderPosterItem = (event: DSEvent) => {
        return (
            <Paper elevation={3} sx={{
                width: '100%',
                marginBottom: theme.spacing(1),
                boxSizing: 'border-box',
                [theme.breakpoints.down('sm')]: {
                    width: 320,
                    alignSelf: 'center'
                }
            }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        height: 180,
                        position: 'relative'
                    }}>
                    <EventsListImage
                        src={event.coverPhotoUrl}
                        sx={{
                            width: 320,
                            height: 180,
                            alignSelf: 'center'
                        }}
                    />
                    <Stack direction='column'
                        sx={{
                            padding: theme.spacing(2),
                            flexGrow: 1,
                            overflow: 'hidden',
                            placeSelf: 'end',
                            [theme.breakpoints.down('sm')]: {
                                visibility: 'hidden'
                            }
                        }}>
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
        )
    }

    const renderEventsItem = (event: DSEvent) => {
        return (
            <DSEventsItem event={event} />
        )
    }

    const renderItem = (event: DSEvent) => renderEventsItem(event)

    return (
        <div>
            <Box ref={topRef}
                sx={{
                    placeSelf: 'center',
                    visibility: 'hidden',
                    position: 'absolute',
                    marginTop: -32
                }} />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid
                    sx={{
                        width: '100%'
                    }}
                    direction={'row'}
                    container
                    padding={0}
                    mt={0}
                    mb={4}
                    columns={12}
                    columnSpacing={2}
                    rowSpacing={2}>
                    {pageData.map((event: DSEvent) =>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}>
                            {renderItem(event)}
                        </Grid>
                    )}
                </Grid>
                <Pagination count={pageCount} color="primary" sx={{ alignSelf: 'center' }} onChange={onPageChangedListener} />
            </Box>
        </div>
    )
}