import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import SideNavbar from "./componets/SideNavbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SubNavbar from "./componets/SubNavbar";
import Governance from "./pages/Governance";
import SocialDashboard from "./pages/SocialDashboard";

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
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="container">
            <SideNavbar></SideNavbar>
            <div className="main_container">
              <Navbar></Navbar>
              <SubNavbar></SubNavbar>
              <Routes>
                <Route exact path="/" element={<Governance />} />
                <Route exact path="/Social" element={<SocialDashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
