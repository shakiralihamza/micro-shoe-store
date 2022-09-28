import React, {useContext, useEffect} from 'react';
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";
import MyContext from "../Context/MyContext";
import Box from "@mui/material/Box";
import ProductList from "./ProductList";

function ProductByCategory() {
    const {shoes} = useContext(MyContext);
    const {category} = useParams();
    const {setCategory, setMenu} = useContext(MyContext);

    const categoryShoes = shoes.filter(shoe => shoe.category === category);

    useEffect(() => {
        setCategory(category);
        setMenu('products');
        return () => setCategory('');
    }, [category, setCategory, setMenu])

    return (
        <Typography variant={'h5'} mt={4}>
            <Box component={'span'} sx={{textTransform: 'capitalize'}}>{category}</Box> Shoes
            <ProductList shoes={categoryShoes}/>
            <Outlet/>
        </Typography>
    );
}

export default ProductByCategory;
