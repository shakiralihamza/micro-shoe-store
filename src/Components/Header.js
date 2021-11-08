import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Container, Grid, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import MyContext from "../Context/MyContext";

const MenuButton = styled(Button)(({theme}) => ({
    borderRadius: 0,
    overrideProps: {
        MuiButton: {
            disableRipple: true
        }
    },
    '&:hover': {
        color: theme.palette.text.secondary
    }
}));

function Header() {
    const navigate = useNavigate();
    const {category, menu} = useContext(MyContext);
    const handleClick = (menu) => {
        navigate(menu);
    }

    const handleCategoryClick = category => navigate(`/products/${category}`)

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Container maxWidth={'lg'}>
                    <Toolbar disableGutters>
                        <Grid container alignItems={"center"}>
                            <Grid item xs={4}>
                                <IconButton
                                    size="medium"
                                    edge="start"
                                    color="inherit"
                                    aria-label="home"
                                    onClick={() => handleClick('/')}
                                >
                                    Shoe Store
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item xs={"auto"}>
                                        <Stack
                                            // sx={{flexGrow: 1, mt: 1, justifyContent: "center"}}
                                            direction="row"
                                            spacing={2}
                                        >
                                            <MenuButton
                                                sx={{borderBottom: category === 'men' ? '1.5px solid' : null}}
                                                color="inherit" onClick={() => handleCategoryClick('men')}>
                                                <Typography variant={"caption"}>
                                                    Men
                                                </Typography>
                                            </MenuButton>
                                            <MenuButton
                                                sx={{borderBottom: category === 'women' ? '1.5px solid' : null}}
                                                color="inherit" onClick={() => handleCategoryClick('women')}>
                                                <Typography variant={"caption"}>
                                                    Women
                                                </Typography>
                                            </MenuButton>
                                            <MenuButton
                                                sx={{borderBottom: category === 'kids' ? '1.5px solid' : null}}
                                                color="inherit" onClick={() => handleCategoryClick('kids')}>
                                                <Typography variant={"caption"}>
                                                    Kids
                                                </Typography>
                                            </MenuButton>
                                        </Stack>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justifyContent={"end"}>
                                    <Grid item xs={"auto"}>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                        >
                                            <MenuButton
                                                sx={{borderBottom: menu === '/' ? '1.5px solid' : null}}
                                                color={'inherit'}
                                                onClick={() => handleClick('/')}
                                            >
                                                <Typography variant={"caption"}>
                                                    Home
                                                </Typography>
                                            </MenuButton>
                                            <MenuButton
                                                sx={{borderBottom: menu === 'products' ? '1.5px solid' : null}}
                                                color={'inherit'}
                                                onClick={() => handleClick('products')}
                                            >
                                                <Typography variant={"caption"}>
                                                    Products
                                                </Typography>
                                            </MenuButton>
                                            <MenuButton
                                                sx={{borderBottom: menu === 'about' ? '1.5px solid' : null}}
                                                color="inherit" onClick={() => handleClick('about')}
                                            >
                                                <Typography variant={"caption"}>
                                                    About
                                                </Typography>
                                            </MenuButton>
                                        </Stack>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;