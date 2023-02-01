import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import DSStatisticItem from './DSStatisticItem';
import { DSStatistic } from './../model/DSStatistic';

interface DSStatisticsProps {
    statistics: DSStatistic[]
}

export default function DSStatistics({ statistics, ...props }: DSStatisticsProps) {

    const theme = useTheme()

    return (
        <div>
            {statistics.map((statistic: DSStatistic, index: number) => (
                <div>
                    <DSStatisticItem label={statistic.title} maxValue={statistic.maxValue} visualComponent={statistic.iconComponent} />
                </div>
            ))}
        </div>
    )
}