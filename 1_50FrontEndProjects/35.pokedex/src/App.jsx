import './App.css';
import Card from './components/card';

function App() {
  return (
    <>
      <h1
        style={{
          fontSize: '36px',
          marginTop: '30px',
        }}
      >
        Pokedex
      </h1>
      <div className='main'>
        <Card />
      </div>
    </>
  );
}

export default App;
