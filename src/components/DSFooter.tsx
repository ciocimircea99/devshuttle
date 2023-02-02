import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Typography,
    Box,
    Link,
    Stack
} from '@mui/material';
import { DSPage, bottomSitePages, topSitePages, fastActions } from '../model/DSPage';


interface DSFooterProps {
    children?: React.ReactNode;
}

export default function DSFooter({ children, ...props }: DSFooterProps) {

    const theme = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                backgroundColor: '#000000',
                justifyContent: 'center',
                padding: theme.spacing(1)
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                    },
                    [theme.breakpoints.up('sm')]: {
                        flexDirection: 'row',
                    }
                }}>
                {
                    topSitePages.concat(bottomSitePages).map((page: DSPage) => (
                        <Link
                            sx={{
                                margin: theme.spacing(1),
                                textAlign: 'center'
                            }}
                            href='#'>
                            {page.title}
                        </Link>
                    ))
                }
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                {
                    fastActions.map((page: DSPage) => (
                        <Link
                            sx={{
                                margin: theme.spacing(2),
                                textAlign: 'center'
                            }}
                            href='#'>
                            {page.title}
                        </Link>
                    ))
                }
            </Box>
            <Typography
                variant='body2'
                sx={{
                    color: "#FFFFFF",
                    boxSizing: 'border-box',
                    padding: theme.spacing(2),
                    textAlign: 'center'
                }}>Str. T. Vladimirescu nr. 75/A, Oradea | Telefon: 0770 112 922 </Typography>
            <Typography
                variant='body2'
                sx={{
                    color: "#FFFFFF",
                    boxSizing: 'border-box',
                    padding: theme.spacing(2),
                    textAlign: 'center'
                }}>Email: exploregamingpub@gmail.com</Typography>
            <Typography
                variant='body2'
                sx={{
                    color: "#FFFFFF",
                    boxSizing: 'border-box',
                    padding: theme.spacing(2),
                    textAlign: 'center'
                }}>Copyright © 2018 - 2023 Explore Gaming Pub</Typography>
        </Box>
    )
}