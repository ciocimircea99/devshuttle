import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Grid,
    Typography,
    styled,
    Container,
    Stack
} from '@mui/material';
import { DSOffer, offer } from '../model/DSOffer';
import DSOfferItem from './DSOfferItem';

interface DSOfferGridProps {
}

export default function DSOfferGrid({ ...props }: DSOfferGridProps) {

    const theme = useTheme()
    const offerItems = offer

    return (
        <Grid
            container
            spacing={{ xs: 4, md: 4 }}
        >
            {offerItems.map((offer: DSOffer, index: number) => (
                <Grid item xs={12} sm={12} md={4} key={offer.title + index}>
                    <DSOfferItem
                        paperSx={{ padding: theme.spacing(2) }}
                        visualContainerSx={{
                            width: '100%',
                            height: '56px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                        visualComponent={offer.iconComponent}
                        title={offer.title}
                        description={offer.description}
                        detailsRoute={'offer' + offer.title + 'route'}
                    />
                </Grid>

            ))}
        </Grid>
    )
}