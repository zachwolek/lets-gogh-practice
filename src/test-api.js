export function getHomepage(){
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=nude`)
    .then(response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json();
        }
      })
      .then(data => {
        const artifactIds = data.data.map(data => data.id)
        return artifactIds
      })
}


export function getArtifacts(searchValue){
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then(response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json();
        }
    })
    .then(data => {
        const artifactIds = data.data.map(data => data.id)
        return artifactIds
      })
}
