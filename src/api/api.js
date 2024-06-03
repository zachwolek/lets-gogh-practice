function getArtifacts(){
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then((response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json()
        }
    }))
}

//When downloading images, use /full/843,/0/default.jpg parameters.

//example search:
//https://api.artic.edu/api/v1/artworks/search?q=cats

//example image:
//https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg