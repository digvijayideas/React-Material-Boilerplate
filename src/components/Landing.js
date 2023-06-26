import React from 'react'
import CustomBox from '../ui/CustomBox';
import Typography from '@mui/material/Typography';

export default function Landing() {
    return (
        <div>
            <CustomBox>
                <Typography component="h1" variant="h5">
                    Custom Box Heading
                </Typography>
            </CustomBox>
        </div>
    );
}