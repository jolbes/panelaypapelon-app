import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import { Container, Grid } from '@mui/material';


function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <Container>
      <Grid item md={3}>
          <Grid item sm={3}>
            <CardItem />
          </Grid>  
      </Grid>
    </Container>
    </>
  );
}

export default App;
