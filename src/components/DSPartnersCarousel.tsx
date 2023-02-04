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

interface DSPartnersCarouselProps {
    pictures: string[]
}

const PARTNER_IMAGE_SIZE=150

export default function DSPartnersCarousel({ pictures, ...props }: DSPartnersCarouselProps) {

    const theme = useTheme()

    const mainContainerRef = React.useRef<HTMLElement>();
    const swiperRef = React.useRef<SwiperCore>();

    const [slidesPerView, setSlidesPerView] = React.useState(0);
    const [swiperPadding, setSwiperPadding] = React.useState(0);

    const computeWidthDynamics = (width: number | undefined) => {
        if (width !== undefined) {
            const slidesPerView = Math.min(Math.floor(width / PARTNER_IMAGE_SIZE), pictures.length - 1)
            const slidesWidth = slidesPerView * PARTNER_IMAGE_SIZE
            const undistributedWidth = width - slidesWidth

            let swipperPadding = Math.floor(undistributedWidth / 2) + 1
            if (slidesPerView == pictures.length - 1) {
                swipperPadding = 0
            }

            setSlidesPerView(slidesPerView)
            setSwiperPadding(swipperPadding)
        }
    }

    const handleResize = () => {
        const parentElement = mainContainerRef.current?.parentElement
        if (parentElement) {
            computeWidthDynamics(mainContainerRef.current?.parentElement?.offsetWidth)
        }
    }

    React.useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, false);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const SliderImage = styled('img')({
        height: 'auto',
        objectFit: 'scale-down',
    });

    return (
        <Box
            ref={mainContainerRef}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: "#FFFFFF",
                position: 'relative',
                elevation: 5
            }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    paddingX: swiperPadding + 'px'
                }}>
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination, Autoplay]}
                    direction="horizontal"
                    loop={true}
                    slidesPerView={slidesPerView}
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
                                        width: PARTNER_IMAGE_SIZE,
                                        height: PARTNER_IMAGE_SIZE,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        backgroundColor: "#FFFFFF",
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
                zIndex: 2
            }}>
                <IconButton size="large"
                    onClick={() => swiperRef.current?.slideNext()}>
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

