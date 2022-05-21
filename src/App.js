import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Container, Grid } from '@mui/material';
import ItemListContianer from './components/ItemListContianer/ItemListContianer';


function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <Container className='app__Class__Container'>
      <Grid container spacing={2} className='app_ItemListContainer'>
        <Grid item md={3}>
          <ItemListContianer title={"Producto 1"} price={35000} image={"producto1.webp"}/>
        </Grid>
        <Grid item md={3}>
          <ItemListContianer title={"Producto 2"} price={105000} image={"producto2.webp"}/>
        </Grid>
        <Grid item md={3}>
          <ItemListContianer title={"Producto 3"} price={85000} image={"producto3.webp"}/>
        </Grid>
        <Grid item md={3}>
          <ItemListContianer title={"Producto 4"} price={65000} image={"producto4.webp"}/>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
