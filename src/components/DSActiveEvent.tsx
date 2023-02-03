import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import { DSEvent } from './../model/DSEvent';
import DateUtils from '../utilities/DateUtils';
import { useNavigate } from 'react-router-dom';
import { Description, ActiveEventImage } from '../components/CommonComponents'

export interface ActiveEventProps {
    activeEvent: DSEvent
}

export default function ActiveEvent({ activeEvent, ...props }: ActiveEventProps) {

    const navigate = useNavigate()

    const theme = useTheme()

    const description = activeEvent.description

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <Typography variant='h5' sx={{ paddingBottom: theme.spacing(1) }}>EVENIMENT ACTIV</Typography>
            <Box
                sx={{
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',

                    },
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                    }
                }}>
                <Box
                    sx={{
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                        },
                        [theme.breakpoints.up('md')]: {
                            width: '50%',
                            minWidth: "50%"
                        },
                    }}>
                    <ActiveEventImage src={activeEvent.coverPhotoUrl} />
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
                        sx={{ paddingBottom: theme.spacing(1), fontWeight:'bold'}}
                    >{activeEvent.title}</Typography>
                    <Typography
                        variant='body2'
                        sx={{ paddingBottom: theme.spacing(1) }}
                    >{DateUtils.getDateFromTimestamp(activeEvent.date) + ' • ' + activeEvent.location}</Typography>
                    <Description dangerouslySetInnerHTML={{ __html: description }} />
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}>Detalii</Button>
                </Box>
            </Box>
        </Box >
    )
}