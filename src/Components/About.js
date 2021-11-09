import React, {useContext, useEffect} from 'react';
import {Container, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";
import Box from "@mui/material/Box";

function About() {
    const {setMenu} = useContext(MyContext);

    useEffect(() => {
        setMenu('about')
        return () => setMenu('')
    }, [setMenu])

    return (
        <Container maxWidth={'lg'}>
            <Typography variant={'h5'} mt={4}>
                About Section
            </Typography>
            <br/>
            Shoe Store made by using:
            <Box sx={{color: 'text.secondary'}}>
                <ul style={{paddingLeft: 30}}>
                    <li>React</li>
                    <li>React hooks</li>
                    <li>Material-UI</li>
                    <li>Context-API</li>
                    <Box component={'li'} sx={{color: 'text.primary'}}>React Router v6</Box>
                </ul>
            </Box>
        </Container>
    );
}

export default About;