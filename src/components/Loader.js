import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
    return (
        <CircularProgress variant='indeterminate' size={40} thickness={8} />
    )
}
