export function getArtifacts(searchValue){
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue}`)
    .then(response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json();
        }
    })
    .then(data => console.log(data.data))
}


export function getArtifactInfo(artifactId){
    return fetch(`https://api.artic.edu/api/v1/artworks/${artifactId}?fields=id,title,image_id`)
    .then(response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json();
        }
    })
    .then(data => console.log("ARTIFACT INFO: ", data.data))
}


export function getImage(identifier){
    return fetch(`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`)
    .then(response =>{
        if(!response.ok){
           throw new Error ('Something has gone wrong at a JSON level');
        } else {
            return response.json();
        }
    })
    .then(data => console.log("IMAGE DATA: ", data))
}


//When downloading images, use /full/843,/0/default.jpg parameters.

//example search:
//https://api.artic.edu/api/v1/artworks/search?q=cats

//example image:
//https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg