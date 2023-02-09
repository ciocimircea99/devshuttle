import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DSEvent } from '../model/DSEvent';
import DateUtils from '../utilities/DateUtils';
import { Description } from './CommonComponents';
import FormatUtil from '../utilities/FormatUtils';

export interface DSEventsItemProps {
    event: DSEvent
}

export default function DSEventsItem({ event, ...props }: DSEventsItemProps) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 180 }}
                image={event.coverPhotoUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {event.title}
                </Typography>
                <Typography variant="body2" fontWeight={'bold'} color="text.secondary">
                    {DateUtils.getDateFromTimestamp(event.date)}
                </Typography>
                <Typography variant="body2" fontWeight={'bold'} color="text.secondary">
                    {event.location}
                </Typography>
                {Description(event.description)}
            </CardContent>
            <CardActions>
                <Button size="small">Detalii</Button>
            </CardActions>
        </Card>
    )
}