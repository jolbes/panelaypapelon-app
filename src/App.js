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
        <ItemList />
    </Container>
    </>
  );
}

export default App;
