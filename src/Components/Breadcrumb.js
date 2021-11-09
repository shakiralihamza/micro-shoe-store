import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import {Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import MyContext from "../Context/MyContext";
import Box from "@mui/material/Box";


export default function Breadcrumb() {
    const {menu, category, currentProduct} = useContext(MyContext);
    const navigate = useNavigate();

    function handleMenu(path) {
        navigate(path);
    }

    return (
        <Container maxWidth={'lg'} sx={{mt: 3}}>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    {
                        menu === 'products'
                            ?
                            <Link
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:hover': {cursor: 'pointer'}
                                }}
                                color="inherit"
                                onClick={() => handleMenu('/')}
                            >
                                <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                                Home
                            </Link>
                            :
                            null
                    }
                    {
                        menu === 'products'
                            ?
                            <Link
                                underline={category===''?'none':'hover'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: category === '' ? 'text.primary' : null,
                                    '&:hover': {cursor: category===''?'default':'pointer'}
                                }}
                                color="inherit"
                                onClick={() => handleMenu('/products')}
                            >
                                Products
                            </Link>
                            :
                            null
                    }
                    {
                        category
                            ?
                            <Link
                                underline={currentProduct===''?'none':'hover'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: currentProduct === '' ? 'text.primary' : null,
                                    '&:hover': {cursor: currentProduct===''?'default':'pointer'}
                                }}
                                color="inherit"
                                onClick={() => handleMenu(`/products/${category}`)}
                            >
                                <Box component={'span'} sx={{textTransform: "capitalize"}}>{category}</Box>
                            </Link>
                            :
                            null
                    }
                    {
                        currentProduct
                            ?
                            <Link
                                underline='none'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'text.primary',
                                    '&:hover': {cursor: 'default'}
                                }}
                            >
                                {currentProduct}
                            </Link>
                            :
                            null
                    }

                </Breadcrumbs>
            </div>
        </Container>
    );
}

