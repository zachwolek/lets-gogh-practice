import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { getArtifacts, getImage, getArtifactInfo } from './api/api';
import { testData } from './test-data'

function App() {
const [artifacts, setArtifacts] = useState(testData)

getArtifacts('cats').then((catResults)=>{
  console.log("CAT RESULTS HERE: ", catResults)
})
//When you do a FETCH call, 

  return (
      <>
        <header id='header'>Let's Gogh</header>
        <Homepage artifacts={artifacts}/>
      </>
  );
}

export default App