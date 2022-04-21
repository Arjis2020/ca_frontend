import { AppBar, Toolbar, Slide, useScrollTrigger, InputBase, Box } from '@mui/material'
import { Search } from '@mui/icons-material'
import React, { useState } from 'react'

export default function ResponsiveBottomAppBar({
    onSearchChange, searchValue
}) {
    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="up" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <HideOnScroll>
            <AppBar
                postion='fixed'
                sx={{
                    top: 'auto',
                    bottom: 0,
                    display: {
                        xs: 'block',
                        md: 'none'
                    },
                    background: '#fff'
                }}
            >
                <Toolbar>
                    <InputBase
                        sx={{
                            width: '100%',
                            background: '#E2FAF3',
                            py: 1,
                            px: 3,
                            borderRadius: 10
                        }}
                        autoFocus
                        placeholder="Search my current affairs collection"
                        inputProps={{
                            'aria-label': 'search google maps',
                            'style': {
                                fontWeight: 'bold',
                                fontSize: 14
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
                                <Search 
                                    fontSize='20px'
                                />
                            </Box>
                        }
                        onChange={(e) => onSearchChange(e.target.value)}
                        value={searchValue}
                    />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}
