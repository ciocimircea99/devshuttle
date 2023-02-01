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
            <DSStatisticItem label={statistics[0].title} maxValue={statistics[0].maxValue} visualComponent={statistics[0].iconComponent} step={2} />
            <DSStatisticItem label={statistics[1].title} maxValue={statistics[1].maxValue} visualComponent={statistics[1].iconComponent} step={90} />
            <DSStatisticItem label={statistics[2].title} maxValue={statistics[2].maxValue} visualComponent={statistics[2].iconComponent} step={340} />
            <DSStatisticItem label={statistics[3].title} maxValue={statistics[3].maxValue} visualComponent={statistics[3].iconComponent} step={590} />
        </div>
    )
}