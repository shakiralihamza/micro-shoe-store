import React, {useContext, useEffect} from 'react';
import {Container} from "@mui/material";
import MyContext from "../Context/MyContext";
import {Outlet} from 'react-router-dom';
function Products() {
    const {setMenu} = useContext(MyContext);


    useEffect(() => {
        setMenu('products')
        return () => setMenu('')
    }, [setMenu])
    
    return (
        <Container maxWidth={'lg'}>
            <Outlet/>
        </Container>
    );
}

export default Products;