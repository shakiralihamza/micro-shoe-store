import React, {useContext, useEffect} from 'react';
import {Container, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";

function About() {
    const {setMenu} = useContext(MyContext);

    useEffect(() => {
        setMenu('about')
        return () => setMenu('')
    }, [setMenu])

    return (
        <Container maxWidth={'md'}>
            <Typography variant={'h5'} mt={8}>
                About Page
            </Typography>
        </Container>
    );
}

export default About;