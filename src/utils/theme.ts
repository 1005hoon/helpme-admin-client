import { ThemeOptions } from '@mui/material';

export default {
    palette: {
        primary: {
            light: '#4f5b62',
            main: '#263238',
            dark: '#000a12',
        },
        secondary: {
            light: '#58a5f0',
            main: '#0277bd',
            dark: '#004c8c',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                * { font-family: 'Noto Sans KR', 'roboto', sans-serif; }
            `,
        },
    },
} as ThemeOptions;
