import * as React from 'react';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper
} from '@mui/material';
import { statistics } from '../model/DSStatistic';


interface DSPageSectionTitledProps {
    title: string,
    showPaper?: boolean | null;
    paperSx?: SxProps<Theme>;
    children?: React.ReactNode;
}

export default function DSPageSectionTitled({ title, showPaper, paperSx, children, ...props }: DSPageSectionTitledProps) {

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
            {paperVisible && <Paper elevation={3} sx={paperSx}>
                {children}
            </Paper>
            }
            {!paperVisible && <Stack>
                {children}
            </Stack>}
        </Stack >
    )
}