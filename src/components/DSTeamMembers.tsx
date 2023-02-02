import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { DSMember } from '../model/DSMember';
import { Box, Typography, List, Avatar, ListItem, Paper } from '@mui/material';

interface DSTeamMemberProps {
    teamMembers: DSMember[]
}

export default function DSTeamMembers({ teamMembers, ...props }: DSTeamMemberProps) {

    const theme = useTheme()

    const MemberPhoto = styled('img')({
        height: '150px',
        width: 'auto',
        objectFit: 'scale-down',
        padding: theme.spacing(2)
    });

    return (
        <List>
            {teamMembers.map((teamMember: DSMember, index: number) => (
                <ListItem>
                    <Paper elevation={3} sx={{ backgroundColor: '#FFFFFF', padding: theme.spacing(2), width: '100%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                },
                                [theme.breakpoints.up('sm')]: {
                                    flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',
                                }
                            }
                            }>
                            <Avatar sx={{ height: '150px', width: '150px' }}>
                                <MemberPhoto src={teamMember.pictureUrl} />
                            </Avatar>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    padding: theme.spacing(2)
                                }}>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 'bold',
                                        [theme.breakpoints.down('sm')]: {
                                            textAlign: 'center'
                                        }
                                    }}
                                >
                                    {teamMember.name}
                                </Typography>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        [theme.breakpoints.down('sm')]: {
                                            textAlign: 'center'
                                        }
                                    }}
                                >
                                    {teamMember.title}
                                </Typography>
                                <Typography
                                    variant='body2'>
                                    {teamMember.description}
                                </Typography>
                            </Box>
                        </Box >
                    </Paper>
                </ListItem>
            ))}
        </List >
    )
}