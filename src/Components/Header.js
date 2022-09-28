import * as React from 'react';
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

    const handleClick = (menu) => navigate(menu);
    const handleCategoryClick = category => navigate(`/products/${category}`)

    return (
        <Box sx={{position: 'fixed', top: 0, bgcolor: 'white', width: '100%', zIndex: 999, opacity: 0.92}}>
            <Box sx={{flexGrow: 1}}>
                <Container maxWidth={'lg'}>
                    <Toolbar disableGutters sx={{backgroundColor: 'transparent'}}>
                        <Grid container alignItems={"center"}>
                            <Grid item xs={12} sm={12} md={4}>
                                <IconButton
                                    disableRipple
                                    size="medium"
                                    edge="start"
                                    color="inherit"
                                    aria-label="home"
                                    onClick={() => handleClick('/')}
                                >
                                    Shoe Store
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} order={{xs: 1, sm: 0}}
                                  sx={{marginTop: {xs: '10px', sm: '0'}}}>
                                <Grid container justifyContent={{xs: 'center', sm: 'center', md: "center"}}>
                                    <Grid item xs={"auto"}>
                                        <Stack
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
                                            <MenuButton
                                                sx={{borderBottom: category === 'products' ? '1.5px solid' : null}}
                                                color="inherit" onClick={() => handleClick('products')}>
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
            </Box>
        </Box>
    );
}

export default Header;
