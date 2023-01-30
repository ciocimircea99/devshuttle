import * as React from 'react';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { Box, Typography, styled, Container, Stack } from '@mui/material';

interface DSPageContentProps {
    children?: React.ReactNode;
}

export default function DSPageContent({ children, ...props }: DSPageContentProps) {

    const theme = useTheme()

    return (
        <Box sx={{
            width: '100%',
            height:'100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            backgroundColor: "#F0F0F0",
            elevation: 2,
            marginTop: '-50px',
            zIndex: 4,
            paddingBottom:theme.spacing(4)
        }}>
            <Container sx={{
                marginTop: '-50px',
                zIndex: 5,
                paddingX: theme.spacing(4)
            }}>
                <Stack spacing={4}>
                    {children}
                </Stack>
            </Container>
        </Box>
    )
}