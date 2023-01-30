import * as React from 'react';
import {
    Stack,
    LinearProgress,
    Typography,
    Box,
    Fade,
} from '@mui/material';

interface DSStatisticsItemProps {
    label: string,
    maxValue: number,
    visualComponent: React.ReactNode | null
}

export default function DSStatisticsItem({ label, maxValue, visualComponent, ...props }: DSStatisticsItemProps) {
    const [progress, setProgress] = React.useState(0);
    const [labelValue, setLabelValue] = React.useState(0);
    const [textLabelVisibility, setTextLabelVisibility] = React.useState(false);

    const animationDuration = 1000
    const step = Math.max((maxValue / animationDuration + 1), 1)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setLabelValue((oldLabelValue) => {
                const newLabelValue = Math.min(oldLabelValue + step, maxValue)
                if (newLabelValue >= maxValue) {
                    setTextLabelVisibility(true)
                    clearInterval(timer)
                }
                setProgress(newLabelValue * 100 / maxValue)
                return newLabelValue
            });
        }, (animationDuration / maxValue));

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                {visualComponent}
                <Fade in={textLabelVisibility}
                    style={{ transitionDelay: '200ms' }}
                >
                    <Typography variant="h6" sx={{ flex: 1, textAlign: 'end' }}>{label}</Typography>
                </Fade>
            </Box>
            <LinearProgress variant="determinate" value={progress} sx={{ height: '10px' }} /><Box>
                <Typography variant="h6" sx={{ flex: 1, textAlign: 'end', color: 'primary.main', fontWeight: 'bold' }}>{(Math.round(labelValue)) + "+"}</Typography>
            </Box>
        </Stack>
    );
}