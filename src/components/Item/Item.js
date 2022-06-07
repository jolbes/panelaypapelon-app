import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

const Item = (getProducts) => {
  const { title, price, stock, description, image } = products;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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
        <ItemCount initil={1} />
      </CardActions>
    </Card>
  );
};

export default Item;
