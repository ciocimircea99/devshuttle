import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    ImageList,
    ImageListItem,
    Fab,
    IconButton
} from '@mui/material';
import Button from '@mui/material/Button';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import DSFullScreenPhotoCarousel from './DSFullScreenPhotoCarousel';

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Scrollbar, Pagination, Navigation, Autoplay } from "swiper";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface GalleryItemProps {
    pictures: string[]
}

export default function GalleryItem({ pictures, ...props }: GalleryItemProps) {

    const theme = useTheme()

    const swiperRef = React.useRef<SwiperCore>();

    const fullscreenHandle = useFullScreenHandle();
    const [startIndex, setStartIndex] = React.useState(0);

    const SliderImage = styled('img')({
        height: '100%',
        objectFit: 'cover'
    });

    const enterFullcreen = (index: number) => {
        setStartIndex(index)
        fullscreenHandle.enter()
    }

    return (
        <Box sx={{
            height: '400px',
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
            <Box sx={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                padding: theme.spacing(2),
                boxSizing: 'border-box',
                display: 'flex'
            }}>
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination, Autoplay]}
                    direction="horizontal"
                    loop={true}
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
            <Fab size="large"
                color="primary"
                sx={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                }}
                onClick={() => enterFullcreen(0)}>
                <FullscreenIcon />
            </Fab>
            <FullScreen handle={fullscreenHandle}>
                {fullscreenHandle.active &&
                    <Box>
                        <Fab size="large"
                            color="primary"
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                            }}
                            onClick={fullscreenHandle.exit}>
                            <CloseFullscreenIcon />
                        </Fab>
                        <DSFullScreenPhotoCarousel pictures={pictures} startingIndex={startIndex} />
                    </Box>
                }
            </FullScreen>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 24px)',
                paddingX: '6px',
                boxSizing: 'border-box'
            }}>
                <IconButton
                    size="large"
                    sx={{
                        backgroundColor: 'primary.main',
                        "&:hover, &.Mui-focusVisible": { backgroundColor: "primary.main" }
                    }}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronLeftIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton
                    size="large"
                    sx={{
                        backgroundColor: 'primary.main',
                        "&:hover, &.Mui-focusVisible": { backgroundColor: "primary.main" }
                    }}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ChevronRightIcon sx={{ color: 'white' }} />
                </IconButton>
            </Box>
        </Box>
    )
}