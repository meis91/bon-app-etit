import {createTheme} from "@mui/material/styles";

const Theme = createTheme({
    palette: {
        primary: {
            light: '#4d4d52',
            main: '#2c2c2f',
            dark: '#111111',
            contrastText: '#fff',
        },
        secondary: {
            light: '#be9655',
            main: '#c78f46',
            dark: '#de7e2d',
            contrastText: '#000',
        },
        error: {
            light: '#ad0404',
            main: '#8a0303',
            dark: '#680202',
            contrastText: '#000',
        },
    },
});

export default Theme;