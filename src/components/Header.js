import { Search } from '@mui/icons-material'
import { AppBar, Box, InputBase, Stack, Toolbar } from '@mui/material'
import React from 'react'

export default function Header({ onSearchChange, searchValue }) {
    return (
        <AppBar
            position='fixed'
            sx={{
                background: '#fff'
            }}
        >
            <Toolbar>
                <Stack
                    direction='row'
                    alignItems='center'
                    sx={{
                        justifyContent: {
                            xs: 'center',
                            md: 'space-between'
                        }
                    }}
                    width='100%'
                >
                    <img
                        src='souromi_logo.png'
                        style={{
                            height: 45
                        }}
                    />
                    <InputBase
                        sx={{
                            ml: 2,
                            width: '50%',
                            background: '#E2FAF3',
                            py: 1,
                            px: 3,
                            borderRadius: 10,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                        placeholder="Search my current affairs collection"
                        inputProps={{
                            'aria-label': 'search google maps',
                            'style': {
                                fontWeight: 'bold'
                            },
                        }}
                        startAdornment={
                            <Box
                                sx={{
                                    mr: 1,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Search />
                            </Box>
                        }
                        onChange={(e) => onSearchChange(e.target.value)}
                        value={searchValue}
                    />
                    <div>

                    </div>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
