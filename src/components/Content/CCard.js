import { Avatar, Button, Card, CardActionArea, CardContent, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function CCard({ ca }) {
    const {
        title,
        description,
        image,
        link,
        source,
        author
    } = ca

    return (
        <Card
            elevation={5}
            sx={{
                height: '100%',
            }}
        >
            {/* <CardActionArea
                sx={{
                    height: '100%'
                }}
                //onClick={() => window.open(link, '_blank', 'noreferrer noopener')}
            > */}
            <CardContent
                sx={{
                    height: '100%',
                }}
            >
                <Stack
                    justifyContent='space-between'
                    sx={{
                        height: '100%'
                    }}
                    spacing={2}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                        alignItems='start'
                    >
                        <Avatar
                            src={image}
                            sx={{
                                width: 40,
                                height: 40
                            }}
                        />
                        <Stack
                            spacing={0.5}
                        >
                            <Typography
                                fontWeight='bold'
                                fontSize='13px'
                            >
                                {title}
                            </Typography>
                            <Typography
                                fontSize='12px'
                                fontWeight='500'
                                sx={{
                                    maxWidth: {
                                        xs: '15rem',
                                        md: '24rem'
                                    }
                                }}
                                noWrap
                                wordWrap='break-word'
                                textOverflow='ellipsis'
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            {source &&
                                <Paper
                                    sx={{
                                        px: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        background: '#000',
                                        py: 0.2
                                    }}
                                >
                                    <Typography
                                        fontWeight='bold'
                                        fontSize='10px'
                                        color='#fff'
                                        sx={{
                                            maxWidth: {
                                                xs: '7rem',
                                                md: '8rem'
                                            }
                                        }}
                                        textOverflow='ellipsis'
                                        noWrap
                                    >
                                        Via {source}
                                    </Typography>
                                </Paper>
                            }
                            {author &&
                                <Paper
                                    sx={{
                                        px: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        background: '#000',
                                        py: 0.2
                                    }}
                                >
                                    <Typography
                                        fontWeight='bold'
                                        fontSize='10px'
                                        color='#fff'
                                        sx={{
                                            maxWidth: {
                                                xs: '4rem',
                                                md: '8rem'
                                            }
                                        }}
                                        textOverflow='ellipsis'
                                        noWrap
                                    >
                                        By {author}
                                    </Typography>
                                </Paper>
                            }
                        </Stack>
                        <Stack
                            direction='row'
                            component='a'
                            href={link}
                            target='_blank'
                            rel='noreferrer noopener'
                            sx={{
                                opacity: 0.5,
                                transition: '0.3s all ease',
                                '&:hover': {
                                    cursor: 'pointer',
                                    opacity: 1
                                }
                            }}
                        >
                            <Typography
                                varaint='body1'
                                fontWeight='bold'
                                color='secondary'
                            >
                                Link
                            </Typography>
                            <ArrowRightAltIcon color='secondary' />
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
            {/* </CardActionArea> */}
        </Card >
    )
}
