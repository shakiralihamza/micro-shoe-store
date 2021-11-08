import * as React from 'react';
import Typography from '@mui/material/Typography';
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

    function handleClick(path) {
        navigate(path);
    }

    return (
        <Container maxWidth={'lg'} sx={{mt: 3}}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    {
                        menu === '/' || menu ==='products'
                            ?
                            <Link
                                underline="none"
                                sx={{display: 'flex', alignItems: 'center'}}
                                color="inherit"
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
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: category === '' ? 'text.primary' : null
                                }}
                                color="inherit"
                            >
                                Products
                            </Link>
                            :
                            null
                    }
                    {
                        category
                            ?
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: currentProduct === '' ? 'text.primary' : null
                                }}
                            >
                                <Box component={'span'} sx={{textTransform: "capitalize"}}>{category}</Box>
                            </Typography>
                            :
                            null
                    }
                    {
                        currentProduct
                            ?
                            <Typography
                                sx={{display: 'flex', alignItems: 'center'}}
                                color="text.primary"
                            >
                                {currentProduct}
                            </Typography>
                            :
                            null
                    }

                </Breadcrumbs>
            </div>
        </Container>
    );
}

