import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    ImageList,
    ImageListItem,
    Fab
} from '@mui/material';
import Button from '@mui/material/Button';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import DSFullScreenPhotoCarousel from './DSFullScreenPhotoCarousel';

interface DSImageListGalleryProps {
    pictures: string[],
}

export default function DSScrollableGallery({ pictures, ...props }: DSImageListGalleryProps) {

    const theme = useTheme()

    const fullscreenHandle = useFullScreenHandle();
    const [startIndex, setStartIndex] = React.useState(0)

    const enterFullcreen = (index: number) => {
        setStartIndex(index)
        fullscreenHandle.enter()
    }

    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <Box sx={{
                width: '100%',
                height: 450,
                overflowY: 'auto',
                padding: theme.spacing(2),
                boxSizing: 'border-box'
            }}>
                <ImageList
                    variant="masonry"
                    sx={{ paddingRight: 0 }}>
                    {pictures.map((picture: string, index: number) => (
                        <ImageListItem key={picture}>
                            <img
                                src={picture}
                                loading="lazy"
                                onClick={() => enterFullcreen(index)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Button
                size='large'
                color='primary'
                variant='contained'
                sx={{
                    margin: theme.spacing(2),
                    boxSizing: 'border-box'
                }}>
                Gallery
            </Button>
            <Fab size="large"
                color="primary"
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
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
        </Box>
    )
}