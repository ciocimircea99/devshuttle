import * as React from 'react';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { Box, Typography, styled, Container, Stack } from '@mui/material';

interface DSPageContentProps {
    containerSx: SxProps<Theme> | null,
    children?: React.ReactNode;
}

export default function DSPageContent({ containerSx, children, ...props }: DSPageContentProps) {

    const theme = useTheme()

    return (
        <Box sx={{
            width:'100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            backgroundColor: 'white',
            elevation:2,
            marginTop: '-50px',
            zIndex: 4
        }}>
            <Container sx={containerSx}>

                <Stack>
                    {children}
                </Stack>

            </Container>
        </Box>
    )
}