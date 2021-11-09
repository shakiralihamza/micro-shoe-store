import React from 'react';
import {ImageList, ImageListItem, ImageListItemBar, Rating} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {useNavigate} from "react-router-dom";

function ProductList({shoes}) {
    const navigate = useNavigate();

    const handleClick = (title, category) => navigate(`/products/${category}/${title}`);

    return (
        <ImageList gap={10} cols={3}>
            {shoes.map((item, index) => (
                <Box component={'li'} sx={{'&:hover': {cursor: 'pointer'}}}
                     onClick={() => handleClick(item.title, item.category)}
                >
                    <ImageListItem key={index}>
                        <img
                            src={`${item.image}`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={
                                <Box>
                                    {item.title} &nbsp;-&nbsp;&nbsp;
                                    <Box component={'span'} sx={{color: 'text.secondary'}}>${item.price}</Box>
                                </Box>
                            }
                            subtitle={<Box>
                                <Rating size={"small"} name="read-only" value={item.reviews} readOnly/>
                            </Box>}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                </Box>
            ))}
        </ImageList>

    );
}

export default ProductList;