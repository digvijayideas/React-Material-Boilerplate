import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

export default function CustomBox({children}) {
    const theme = useTheme();
    let mobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
    return (<Box
        sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: mobile ? "none" : "0px 0px 4px 0px rgb(193, 193, 193)",
            borderRadius: mobile ? "none" : "2rem",
            marginTop: '8rem !important',
            padding: '3rem',
            background: 'white',
            alignItems: 'center'
        }}
    >
        {children}
    </Box>);
}