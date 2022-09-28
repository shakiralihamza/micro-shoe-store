import React, {useState} from "react";
import MyContext from "./Context/MyContext";
import ShoeData from "./assets/ShoeData";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Breadcrumb from "./Components/Breadcrumb";
// noinspection ES6CheckImport
import {Routes, Route} from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";
import ProductByCategory from "./Components/ProductByCategory";
import ProductDetail from "./Components/ProductDetail";
import ProductIndex from "./Components/ProductIndex";
import {lime} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: lime
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
    const [category, setCategory] = useState('');
    const [menu, setMenu] = useState('');
    const [currentProduct, setCurrentProduct] = useState('');
    const ContextData = {
        shoes,
        category,
        setCategory,
        menu,
        setMenu,
        currentProduct,
        setCurrentProduct
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
                    <Route path="products" element={<Products/>}>
                        <Route index element={<ProductIndex/>}/>
                        <Route path={':category'} element={<ProductByCategory/>}/>
                        <Route path={':category/:title'} element={<ProductDetail/>}/>
                    </Route>
                </Routes>
            </MyContext.Provider>
        </ThemeProvider>
    );
}

export default App;
