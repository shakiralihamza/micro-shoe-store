import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Grid, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";

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
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems={"center"} justifyContent={"space-evenly"}>
                        <Grid item>
                            <IconButton
                                size="medium"
                                edge="start"
                                color="inherit"
                                aria-label="home"
                                // sx={{mr: 2}}
                            >
                                Shoe Store
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Stack
                                // sx={{flexGrow: 1, mt: 1, justifyContent: "center"}}
                                direction="row"
                                spacing={2}
                            >
                                <MenuButton sx={{borderBottom: '1.5px solid'}} color="inherit">
                                    <Typography variant={"caption"}>
                                        Men
                                    </Typography>
                                </MenuButton>
                                <MenuButton color="inherit">
                                    <Typography variant={"caption"}>
                                        Women
                                    </Typography>
                                </MenuButton>
                                <MenuButton color="inherit">
                                    <Typography variant={"caption"}>
                                        Kids
                                    </Typography>
                                </MenuButton>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <MenuButton color={'inherit'}>
                                    <Typography variant={"caption"}>
                                        Products
                                    </Typography>
                                </MenuButton>
                                <MenuButton color="inherit">
                                    <Typography variant={"caption"}>
                                        About
                                    </Typography>
                                </MenuButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;