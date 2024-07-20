import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main:"#008080"
        },
    },
  typography: {
    fontFamily: 'Monteserrat',
    h2:{
        fontWeight: "bold",
        lineHeight: "6rem",
        letterSpacing: "1px"
    }
  },
});

export default theme;