import { Card } from "./Card"

export function Homepage({artifacts}){
    const artifactCards = artifacts.map(artifact => {
    return (
       <Card 
        id={artifact.id}
        image_id={artifact.image_id}
        title={artifact.title}
       />
    )
    })
}