import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/Homepage';

function App() {
  return (
      <>
        <header id='header'>Gotta Gogh</header>
        <Homepage artworks={artworks}/>
      </>
  );
}

export default App