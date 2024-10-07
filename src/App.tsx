import MuiRadio from "./components/MuiRadio";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import MuiCheckoutbox from "./components/MuiCheckbox";

import MuiAutocomplete from "./components/MuiAutocomplete";

import MuiRating from "./components/MuiRating";
import MuiSwitch from "./components/MuiSwitch";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiMenu from "./components/MuiMenu";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import { colors, createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  // createTheme ka obj pyn | doc ka obj tine pay yone pl 
  const theme = createTheme({
    palette: {
      secondary: {
        main: colors.orange[500],
      },
    },

    // mui component twy root ka nay call pee ta khu lone ko override lote 
    // components => MuiComponentName => styleOverrides | defaultProps => root => css property 
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: "14px"
          }
        }
      },

      MuiButton: {
        // thu ka pr lr tae default twy ko ll ta khr htl htae pyin lox ya 
        defaultProps: {
          disableRipple: true,
          disableElevation: true
        },
        styleOverrides: {
          root: {
            width: 500,
            // color: "white",
            // backgroundColor: "black"
          }
        }
      }
    }
  });

  return (
    <div>
      {/* Customizing Default Style  */}
      {/* 1 => props htae lox ya | disableElevation | disableRipple*/}
      {/* 2 => sx={{}} | style={{}} ta baw nat tutu pl */}
      {/* 3 => styled function nat component sount lox ya | const testBtn = styled()(() => ({fontSize:"1rem"})) */} 
      {/* 4 => css file sount pee className call use */}
      {/* 5 => css module file sount pee 1 page sar a twat khwal use lox ya | pyn use chin yin import styleName => className={styleName["css name"]}
      // 6 => createTheme nat provider oat use

      {/* box ka div  */}
      {/* stack flex lo myo  */}
      {/* paper ka div ko hma border pr tl card lo myo  */}

      <ThemeProvider theme={theme}>
        <MuiButton />
      </ThemeProvider>

      {/* <MuiTypography />
      <MuiTextField />
      <MuiSelect />
      <MuiRadio />
      <MuiCheckoutbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />
      itwizard8122023
      <MuiAccordion />
      <MuiImageList />
      <MuiNavbar />
      <MuiMenu />
      <MuiLink />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiAlert /> */}
      <MuiSnackbar />
    </div>
  );
};

export default App;
