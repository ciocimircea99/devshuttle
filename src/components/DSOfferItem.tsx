import * as React from 'react';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import {
    Paper,
    Typography,
    Button,
    Stack,
    Box,
    Divider
} from '@mui/material';
import { DSOffer } from '../model/DSOffer';

interface DSOfferItemProps {
    paperSx: SxProps<Theme> | null,
    visualContainerSx: SxProps<Theme> | null,
    offer: DSOffer
}

export default function DSOfferItem({
    paperSx,
    visualContainerSx,
    offer,

    ...props }: DSOfferItemProps) {


    const theme = useTheme()

    const navigateTo = (detailsRoute: string) => {
        console.log(detailsRoute)
    }

    return (
        <Paper
            elevation={3}
            sx={paperSx !== null ? paperSx : {}}
        >
            <Stack spacing={2}>
                <Box sx={visualContainerSx}>
                    {offer.iconComponent}
                </Box>
                <Box sx={{ height: { xs: '80px', md: '80px' } }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{offer.title}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>{offer.description}</Typography>
                </Box>
                <Divider sx={{ backgroundColor: theme.palette.grey[700] }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button variant="contained"
                        sx={{ textAlign: 'center', width: '50%' }}
                        onClick={() => navigateTo(offer.description)}
                    >{offer.actionTitle}</Button>
                </Box>
            </Stack>
        </Paper>
    )
}