import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {useState} from 'react';
import './Item.css'

const Item = ({ product, setShowButton }) => {
  const { title, price, stock, description, image } = product;
  
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia className="card__media"
        component="img"
        height="240"
        image={image}
        alt="Imagen del producto"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount initial={1} stock={stock} />
      </CardActions>
      
      
    </Card>
    </>
  );
};

export default Item;
