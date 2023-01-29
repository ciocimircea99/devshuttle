import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { genPhotoArray } from '../model/DSPhoto';

interface DSPictureSliderCarouselProps {
    overlayedText: string
}

export default function DSPictureSliderCarousel({ overlayedText, ...props }: DSPictureSliderCarouselProps) {

    const theme = useTheme()

    const SliderImage = styled('img')({
        position: 'absolute',
        width: '100%',
        height: '100%',
        style: 'width: 100%; height: 100%; object-fit: cover;',
    });

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
                {genPhotoArray(2).map((src: string) => (
                    <SliderImage src={src}></SliderImage>
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
