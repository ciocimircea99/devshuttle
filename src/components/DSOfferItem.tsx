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

interface DSOfferItemProps {
    paperSx: SxProps<Theme> | null,
    visualContainerSx: SxProps<Theme> | null,
    visualComponent: React.ReactNode | null;
    title: string | null,
    description: string | null,
    detailsRoute: string | null
}

export default function DSOfferItem({
    paperSx,
    visualContainerSx,
    visualComponent,
    title,
    description,
    detailsRoute,
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
                    {visualComponent}
                </Box>
                <Box sx={{ height: { xs: '80px', md: '80px' } }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{title}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>{description}</Typography>
                </Box>
                <Divider sx={{ backgroundColor: theme.palette.grey[700] }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button variant="contained"
                        sx={{ textAlign: 'center', width: '50%' }}
                        onClick={() => navigateTo(detailsRoute ? detailsRoute : '')}
                    >Detalii</Button>
                </Box>
            </Stack>
        </Paper>
    )
}