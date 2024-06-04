import { useState, useEffect } from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { getArtifacts, getImage, getArtifactInfo } from './api/api';
import { testData } from './test-data';

function App() {
const [artifacts, setArtifacts] = useState([testData])


getArtifacts('cats')


getArtifactInfo('184186')
// getImage('6b1edb9c-0f3f-0ee3-47c7-ca25c39ee360')

  return (
      <>
        <header id='header'>Let's Gogh</header>
        <Homepage artifacts={artifacts}/>
      </>
  );
}

export default App