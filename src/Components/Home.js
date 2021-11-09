import React, {useContext, useEffect} from 'react';
import {Container, ImageList, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import MyContext from "../Context/MyContext";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

function Home() {
    const {setMenu} = useContext(MyContext);

    useEffect(() => {
        setMenu('/')
        return () => setMenu('')
    }, [setMenu])

    const categories = [
        {
            title: 'men',
            image: 'https://images.unsplash.com/photo-1544880665-a2caf58243bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
            title: 'women',
            image: 'https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            title: 'kids',
            image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        }
    ];
    return (
        <Container maxWidth={'lg'}>
            <Typography variant={'h5'} mt={4}>
                Home Page
            </Typography>
            <br/>
            Browse categories for some stunning shoes
            <br/>
            <br/>
            <ImageBlock categories={categories}/>

        </Container>
    );
}

const ImageBlock = ({categories}) => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate(`/products/${category}`)
    }

    return (
        <ImageList cols={2} gap={20}>
            {
                categories.map((cat) => (
                    <ImageListItem
                        sx={{'&:hover': {cursor: 'pointer'}}}
                        onClick={() => handleClick(cat.title)}
                    >
                        <img
                            src={cat.image}
                            alt={`${cat.title}'s Shoes`}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={
                                <>
                                    <Box component={'span'} sx={{textTransform: 'capitalize'}}>{cat.title}</Box>'s
                                    Shoes
                                </>
                            }
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${cat.title}'s Shoes`}
                                >
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
    );
}

export default Home;