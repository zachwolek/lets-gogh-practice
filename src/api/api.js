export function getHomepage(){
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=nude`)
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
    .then(data => data.data)
}

//arrayOfIds = map(data => data.id)
//arrayOfIds.ForEach(ID => fetch )


const artifactIds = [
    147721,
    265943,
    47608,
    153798,
    81558,
    52668,
    4705,
    4706,
    267736,
    268228,
    267846,
    147067
]

export function getDisplayInfo(artifactIds){
    artifactIds.forEach(id =>{
        return fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`)
    })

}