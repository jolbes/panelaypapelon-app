import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Container, Grid } from '@mui/material';
import ItemListContianer from './components/ItemListContianer/ItemListContianer';
import ItemList from './components/ItemList/ItemList'




function App() {
  

  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <Container className='app__Class__Container'>
      <Grid container spacing={2} className='app_ItemListContainer'>
        <Grid item md={4}>
          <ItemList />
        </Grid>
      </Grid>
    </Container>
    <ItemList />
    </>
  );
}

export default App;
