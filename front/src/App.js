import React from "react";
import "./MIB.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro  from './pages/intro/login';
import SignUp from './pages/login/siginUp';
import Select from './pages/select/select';
import Result from './pages/result/result';
import PrivateRoute from "./service/PrivateRoute";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography:{fontFamily:"'Jua', sans-serif"}
});

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/select" element={
            <PrivateRoute>
              <Select />
            </PrivateRoute>
            }/>
          <Route path="/Result" element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }/>        
        </Routes>
      </Router>
    </ThemeProvider>
  </div>
);
}

export default App;
