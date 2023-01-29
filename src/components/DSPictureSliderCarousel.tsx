import * as React from 'react';
import { useTheme, SxProps } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { genPhotoArray } from '../model/DSPhoto';

interface DSPictureSlideCarouselProps {
    overlayedText: string
}

export default function DSPictureSlideCarousel({ overlayedText, ...props }: DSPictureSlideCarouselProps) {

    const theme = useTheme()
    const photoArray = genPhotoArray(10)

    return (
        <Box sx={{
            width: '100%',
            height: '400px',
            position: 'relative'
        }}>
            <Carousel
                sx={{ height: '100%' }}
                autoPlay={true}
                stopAutoPlayOnHover={false}
                interval={5000}
                animation={'fade'}
                duration={2000}
                swipe={false}
                indicators={false}
                navButtonsAlwaysVisible={false}
            >
                {photoArray.map((src: string) => (
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 'auto',
                            height: '100%',
                            top: 0
                        }}>
                        <img src={src} />
                    </Box>
                ))}
            </Carousel>
            <Box sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                zIndex: 1,
                pointerEvents: 'none',
                background: theme.palette.primary.main + '88',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Typography
                    variant='h4'
                    color={'white'}
                    align='center'>
                    {overlayedText}
                </Typography>
            </Box>
        </Box>
    )
}
