import "./App.css";
import Navbar from "./componets/Navbar";
import SideNavbar from "./componets/SideNavbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A384B",
      light: "#000",
    },
    secondary: {
      main: "#406A91",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="container">
          <SideNavbar></SideNavbar>
          <Navbar></Navbar>
          
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
