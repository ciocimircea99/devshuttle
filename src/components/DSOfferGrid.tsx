import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Grid
} from '@mui/material';
import { DSOffer } from '../model/DSOffer';
import DSOfferItem from './DSOfferItem';

interface DSOfferGridProps {
    offer: DSOffer[]
}

export default function DSOfferGrid({ offer, ...props }: DSOfferGridProps) {

    const theme = useTheme()

    return (
        <Grid
            container
            spacing={{ xs: 4, md: 4 }}
        >
            {offer.map((offer: DSOffer, index: number) => (
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
                        offer={offer}
                    />
                </Grid>

            ))}
        </Grid>
    )
}