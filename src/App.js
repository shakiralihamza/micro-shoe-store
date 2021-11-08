import React from "react";
import MyContext from "./Context/MyContext";
import ShoeData from "./ShoeData";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Breadcrumb from "./Components/Breadcrumb";
// noinspection ES6CheckImport
import {Routes, Route} from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";

const theme = createTheme({
    palette: {
        mode: 'dark',
        // mode: 'light',
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

function App() {
    const shoes = ShoeData();
    const ContextData = {
        shoes
    }

    return (
        <ThemeProvider theme={theme}>
            <MyContext.Provider value={ContextData}>
                <CssBaseline/>
                <Header/>
                <Breadcrumb/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="products" element={<Products/>}/>
                </Routes>
            </MyContext.Provider>
        </ThemeProvider>
    );
}

export default App;
