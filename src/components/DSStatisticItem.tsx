import * as React from 'react';
import {
    Stack,
    LinearProgress,
    Typography,
    Box,
    Fade,
} from '@mui/material';

interface DSStatisticItemProps {
    label: string,
    maxValue: number,
    visualComponent: React.ReactNode | null
    step: number
}

export default function DSStatisticItem({ label, maxValue, visualComponent, step, ...props }: DSStatisticItemProps) {
    const [progress, setProgress] = React.useState(0);
    const [labelValue, setLabelValue] = React.useState(0);
    const [textLabelVisibility, setTextLabelVisibility] = React.useState(false);

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
        }, 50);

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