import React, {useContext, useEffect} from 'react';
import {Container, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";

function Home() {
    const {setMenu} = useContext(MyContext);

    useEffect(() => {
        setMenu('/')
        return () => setMenu('')
    }, [setMenu])

    return (
        <Container maxWidth={'md'}>
            <Typography variant={'h5'} mt={8}>
                Browse categories for some stunning shoes
            </Typography>
        </Container>
    );
}

export default Home;