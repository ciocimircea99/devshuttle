import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper
} from '@mui/material';
import { statistics } from '../model/DSStatistic';
import { DSStatistic } from './../model/DSStatistic';
import DSStatisticsItem from './DSStatisticsItem';


interface DSStatisticsProps {
}

export default function DSStatistics({ ...props }: DSStatisticsProps) {

    const theme = useTheme()
    const egpstatistic = statistics

    return (
        <Stack>
            <Typography variant='h5'
                sx={{
                    marginBottom: theme.spacing(2),
                    flexGrow: 1,
                    textAlign: "center"
                }}>Cu ce ne mandrim?</Typography>
            <Paper elevation={3} sx={{ padding: theme.spacing(4) }}>
                {egpstatistic.map((statistic: DSStatistic, index: number) => (
                    <div>
                        <DSStatisticsItem label={statistic.title} maxValue={statistic.maxValue} visualComponent={statistic.iconComponent} />
                    </div>
                ))}
            </Paper>
        </Stack >
    )
}