import React from 'react';
import {Container, Typography} from "@mui/material";

function Home() {
    return (
        <Container maxWidth={'md'}>
            <Typography variant={'h5'} mt={8}>
                Browse categories for some stunning shoes
            </Typography>
        </Container>
    );
}

export default Home;