import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Paper,
    List,
    ListItem,
    Avatar,
    Box,
    Rating,
    Divider
} from '@mui/material';

import { DSReview } from '../model/DSReview';


interface DSReviewsProps {
    reviews: DSReview[]
}

export default function DSReviews({ reviews, ...props }: DSReviewsProps) {

    const theme = useTheme()

    return (
        <List disablePadding >
            {reviews.map((review: DSReview) => (
                <ListItem disableGutters sx={{ width: '100%' }}>
                    <Paper elevation={3} sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <Stack direction='row'>
                                    <Avatar sx={{
                                        width: '56px',
                                        height: '56px',
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(1)
                                    }}>
                                        {review.authorAvatar}
                                    </Avatar>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginLeft: theme.spacing(2),
                                        }}>
                                        {review.author}
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={review.rating}
                                        readOnly sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginLeft: theme.spacing(2)
                                        }} />
                                </Stack>
                                <Avatar sx={{ width: '36px', height: '36px', marginTop: theme.spacing(1), marginRight: theme.spacing(1) }}>
                                    {review.source}
                                </Avatar>
                            </Box>

                            <Divider sx={{ marginTop: theme.spacing(2), backgroundColor: theme.palette.grey[300] }} />
                            <Typography
                                variant='body1'
                                sx={{ padding: theme.spacing(2) }}>
                                {review.description}
                            </Typography>
                        </Box>
                    </Paper>
                </ListItem>
            ))}
        </List>
    )
}