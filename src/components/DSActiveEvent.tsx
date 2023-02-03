import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import * as React from 'react';
import { DSEvent } from './../model/DSEvent';
import DateUtils from '../utilities/DateUtils';

export interface ActiveEventProps {
    activeEvent: DSEvent
}

export default function ActiveEvent({ activeEvent, ...props }: ActiveEventProps) {

    const theme = useTheme()

    const Image = styled('img')({
        height: '100%',
        width: '100%',
        objectFit: 'scale-down',
    });

    const Description = styled('p')({
        maxHeight: '120px',
        overflowY: 'hidden',
        fontSize: '12px',
        paddingBottom: theme.spacing(1)
    })

    const description = activeEvent.description

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <Typography variant='h6' sx={{ paddingBottom: theme.spacing(1) }}>EVENIMENT ACTIV</Typography>
            <Box
                sx={{
                    display: 'flex',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',

                    },
                    [theme.breakpoints.up('sm')]: {
                        flexDirection: 'row',
                    }
                }}>
                <Box
                    sx={{
                        [theme.breakpoints.down('sm')]: {
                            width: '100%',
                        },
                        [theme.breakpoints.up('sm')]: {
                            width: '50%',
                            minWidth: "50%"
                        },
                    }}>
                    <Image src={activeEvent.coverPhotoUrl} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        position: 'relative',
                        padding: theme.spacing(1),
                        flexGrow: 1
                    }}>
                    <Typography
                        variant='body1'
                        sx={{ paddingBottom: theme.spacing(1) }}
                    >{activeEvent.title}</Typography>
                    <Typography
                        variant='caption'
                        sx={{ paddingBottom: theme.spacing(1) }}
                    >{DateUtils.getDateFromTimestamp(activeEvent.date)}</Typography>
                    <Description dangerouslySetInnerHTML={{ __html: description }} />
                    <Button sx={{ position: 'absolute', bottom: 16, right: 16 }}>Detalii</Button>
                </Box>
            </Box>
        </Box >
    )
}