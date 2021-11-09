import React, {useContext, useEffect} from 'react';
import {Grid, Rating, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import MyContext from "../Context/MyContext";
import Box from "@mui/material/Box";

function ProductDetail() {
    const {shoes, setCurrentProduct, setCategory} = useContext(MyContext);
    const {title} = useParams();
    const {category} = useParams();

    useEffect(() => {
        setCurrentProduct(title);
        setCategory(category);
        return ()=> {
            setCurrentProduct('');
            setCategory('');
        }
    },[category, setCategory, setCurrentProduct, title]);

    const shoeDetail = shoes.filter(shoe => shoe.title === title)[0];
    return (
        <Grid container spacing={3} mt={4}>
            <Grid item xs={8}>
                <Box component={'img'} sx={{width: '100%'}} src={shoeDetail.image} alt={shoeDetail.title}/>
            </Grid>
            <Grid item xs={4}>
                <Stack direction={"column"} spacing={2}>
                    <Typography variant={"body2"} fontSize={25}>{shoeDetail.title}</Typography>
                    <Typography variant={"caption"} fontSize={20}
                                sx={{color: 'secondary.main'}}>${shoeDetail.price}</Typography>
                    <Rating name="read-only" value={shoeDetail.reviews} readOnly/>
                    <Typography variant={"overline"} sx={{
                        textOverflow: "ellipsis",
                        color: 'text.secondary',
                        textAlign: "justify",
                    }}>{shoeDetail.description}</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default ProductDetail;