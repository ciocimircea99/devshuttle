import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, styled, IconButton, Typography } from '@mui/material';
import { Paper } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Scrollbar, Pagination, Navigation, Autoplay } from "swiper";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface DSFullScreenPhotoCarouselProps {
    pictures: string[],
    startingIndex?: number | undefined,
}

export default function DSFullScreenPhotoCarousel({ pictures, startingIndex, ...props }: DSFullScreenPhotoCarouselProps) {

    const theme = useTheme()

    const swiperRef = React.useRef<SwiperCore>();

    const SliderImage = styled('img')({
        height: '700px',
        objectFit: 'scale-down',
    });

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
            }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignContent: 'center'
                }}>
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination, Autoplay]}
                    direction="horizontal"
                    loop={true}
                    initialSlide={startingIndex}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                        swiper.autoplay.run()
                    }}
                    className="mySwiper">
                    {
                        pictures.map((picture: string,) => (
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <SliderImage src={picture} />
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 2,
            }}>
                <IconButton size="large"
                    onClick={() => swiperRef.current?.slidePrev()}>
                    <ChevronLeftIcon sx={{ color: 'primary.main' }} />
                </IconButton>
                <IconButton size="large"
                    onClick={() => swiperRef.current?.slideNext()}>
                    <ChevronRightIcon sx={{ color: 'primary.main' }} />
                </IconButton>
            </Box>
        </Box >
    )
}

