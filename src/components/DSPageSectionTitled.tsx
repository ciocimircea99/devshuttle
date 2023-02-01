import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper
} from '@mui/material';
import { statistics } from '../model/DSStatistic';


interface DSPageSectionTitledProps {
    title: string,
    showPaper?: boolean | null;
    children?: React.ReactNode;
}

export default function DSPageSectionTitled({ title, showPaper, children, ...props }: DSPageSectionTitledProps) {

    const theme = useTheme()

    const paperVisible = showPaper === false ? false : true

    return (
        <Stack>
            <Typography variant='h5'
                sx={{
                    marginBottom: theme.spacing(2),
                    flexGrow: 1,
                    textAlign: "center"
                }}>{title}</Typography>
            {paperVisible && <Paper elevation={3} sx={{ padding: theme.spacing(4) }}>
                {children}
            </Paper>
            }
            {!paperVisible && <Stack>
                {children}
            </Stack>}
        </Stack >
    )
}