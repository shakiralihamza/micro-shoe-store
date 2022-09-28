import React, {useContext} from 'react';
import {Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import MyContext from "../Context/MyContext";
import ProductList from "./ProductList";

function ProductIndex() {
    const {shoes} = useContext(MyContext);

    return (
        <Typography variant={'h5'} mt={4}>
            All Products
            <ProductList shoes={shoes}/>
            <Outlet/>
        </Typography>
    );
}

export default ProductIndex;
