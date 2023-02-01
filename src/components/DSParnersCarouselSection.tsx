import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper
} from '@mui/material';

import DSPartnersCarousel from './DSPartnersCarousel';
import { genPartnersPhotoArray, genPhotoArray } from '../model/DSPhoto'


interface DSParnersCarouselSectionProps {
}

export default function DSParnersCarouselSection({ ...props }: DSParnersCarouselSectionProps) {

    const theme = useTheme()
    const pictures = genPartnersPhotoArray()

    return (
        <Stack>
            <Typography variant='h5'
                sx={{
                    marginBottom: theme.spacing(2),
                    flexGrow: 1,
                    textAlign: "center"
                }}>Partenerii nostri</Typography>
            <Paper elevation={3}>
                <DSPartnersCarousel
                    pictures={pictures} />
            </Paper>
        </Stack >
    )
}