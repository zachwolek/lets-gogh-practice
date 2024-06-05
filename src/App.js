import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { getArtifacts, getDisplayInfo, getHomepage } from './api/api';
import { testData } from './test-data';
import { Form } from './Form/Form';

function App() {
const [artifacts, setArtifacts] = useState([])

function searchArtifacts(searchValue){
    setArtifacts(searchValue)
}
//When you do a FETCH call, 

useEffect(() => {
  getHomepage()
  .then(response =>{
    if(!response.ok){
       throw new Error ('Something has gone wrong at a JSON level');
    } else {
        return response.json();
    }
  })
  .then(data => {
    const artifactIds = data.data.map(data => data.id)
    //this holds an array of all IDS
    return artifactIds
  })
  .then(artifactIds => { 
    const fetchPromises = artifactIds.map(id => 
      //This creates an array of promises
    fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching data for ID ${id}`);
        }
        return response.json();
      })
      .then(data => data.data)
    )
    return Promise.all(fetchPromises)
    //promises get resolved here
  })
  .then(data => setArtifacts(data))
  //this sets all the image data of each API request
})

  return (
      <>
        <header id='header'>Let's Gogh</header>
        <h2 id='subheader'>To the Art Institute of Chicago</h2>
        <Form getArtifacts={getArtifacts}/>
        <Homepage artifacts={artifacts}/>
      </>
  );
}

export default App