import { ThemeOptions } from '@mui/material';

export default {
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                * { font-family: 'Noto Sans KR', 'roboto', sans-serif; }
            `,
        },
    },
} as ThemeOptions;
