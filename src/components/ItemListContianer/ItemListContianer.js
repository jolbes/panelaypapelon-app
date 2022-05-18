import CardItem from "../Card/Card"
import {Grid} from "@mui/material"

const ItemListContianer = () => {
    return(
        <Grid container>
            <Grid item md={3}>
                <CardItem title={"Producto 1"} price={25000}  />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Producto 2"} price={35000}  />
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Producto 3"} price={45000} />
            </Grid>
        </Grid>
    )
}

export default ItemListContianer