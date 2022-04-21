import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CCard from './CCard'
import Loader from '../Loader'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Content({ data, loading }) {
    return (
        <Box
            sx={{
                mt: 10,
            }}
        >
            <Container
                maxWidth='xl'
            >
                <Typography
                    variant='h4'
                    marginBottom={2}
                    fontWeight='bold'
                >
                    Latest Current Affairs
                </Typography>
                {!loading ?
                    data?.length > 0 ?
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                pb: 2,
                            }}
                        >
                            {data?.map(ca => (
                                <Grid
                                    item
                                    xs
                                    md={12 / 3}
                                >
                                    <CCard
                                        ca={ca}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        :
                        <Box
                            sx={{
                                width: '100%',
                                height: '85vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <SentimentVeryDissatisfiedIcon
                                fontSize='large'
                            />
                            <Typography
                                variant='body1'
                                marginTop={2}
                            >
                                No data to show
                            </Typography>
                        </Box>
                    :
                    <Box
                        sx={{
                            width: '100%',
                            height: '85vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Loader />
                    </Box>
                }
            </Container>
        </Box>
    )
}
