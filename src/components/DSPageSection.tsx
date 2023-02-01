import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper
} from '@mui/material';
import { statistics } from '../model/DSStatistic';


interface DSPageSectionProps {
    children?: React.ReactNode;
}

export default function DSPageSection({ children, ...props }: DSPageSectionProps) {

    const theme = useTheme()

    return (
        <Stack>
            <Paper elevation={3} sx={{ padding: theme.spacing(4) }}>
                {children}
            </Paper>
        </Stack >
    )
}