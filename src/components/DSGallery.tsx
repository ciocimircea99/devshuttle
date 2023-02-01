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
import CollectionsIcon from '@mui/icons-material/Collections';

interface DSGalleryProps {
    pictures: string[]
}

export default function DSGallery({ pictures, ...props }: DSGalleryProps) {

    const theme = useTheme()

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ width: '100%', height: 450, overflowY: 'auto', padding: theme.spacing(2), boxSizing: 'border-box' }}>
                <ImageList variant="masonry" cols={3} gap={8} sx={{ paddingRight: 0 }}>
                    {pictures.map((picture: string, index: number) => (
                        <ImageListItem key={picture}>
                            <img
                                src={picture}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Fab size="large"
                color="primary"
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                }} >
                <FullscreenIcon />
            </Fab>
            <Button
                size="large"
                color="primary"
                variant='contained'
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}>
                Gallery
            </Button>
        </Box>
    )
}