import colors from "@mui/joy/colors";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import { colors as MuiColors } from "@mui/material";
import { experimental_extendTheme as extendMuiTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
declare module "@mui/joy/styles" {
  interface PaletteBackground {
    appBody: string;
    componentBg: string;
  }
}
const primary = {
  "50": "#fafafa",
  "100": "#f5f5f5",
  "200": "#9e9e9e",
  "300": "#424242",
  "400": "#212121",
  "500": "#000000",
  "600": "#000000",
  "700": "#000000",
  "800": "#000000",
  "900": "#000000",
};
export const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using `CssVarsProvider` from Joy UI.
  cssVarPrefix: "joy",
  typography: {
    fontFamily: "SF Pro Display', sans-serif",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: primary[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: MuiColors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: primary[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: MuiColors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});

const joyTheme = extendJoyTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { ...primary },
        background: {
          appBody: "var(--joy-palette-primary-50)",
          componentBg: "var(--joy-palette-common-white)",
        },
      },
    },
    dark: {
      palette: {
        primary: { ...primary },
        background: {
          appBody: "var(--joy-palette-common-black)",
          componentBg: "var(--joy-palette-primary-900)",
        },
      },
    },
  },
});

// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
export const theme = deepmerge(muiTheme, joyTheme);
