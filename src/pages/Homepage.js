import { Card } from "./Card"

function Homepage({artifacts}){
    console.log("ARTIFACTS HOMEPAGE: ", artifacts)
    const artifactsCards = artifacts.map(artifact => {
    return (
       <Card 
        id={artifact.id}
        key={artifact.id}
        image_id={artifact.image_id}
        title={artifact.title}
       />
    )
    })

    return (
        <div classname='artifacts-container'>
            {artifactsCards}
        </div>
    )
}

export default Homepage