import './App.css';
import './style.scss';
import { Container } from '@mui/material';
import NotesList from './components/NotesList';
import Header from './components/Header';

function App() {
  return (
    <Container maxWidth='xl'>
      <Header />
      <NotesList />
    </Container>
  );
}

export default App;
