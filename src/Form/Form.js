import '../Form/Form.css'
import { useState } from 'react'

export function Form({getArtifacts}){
    const [searchValue, setValue] = useState('')

    function displaySearch(e){
        e.preventDefault()
            const newSearch = {
                id: Date.now(),
                searchValue
            }
            console.log("NEW SEARCH", newSearch)
            getArtifacts(newSearch)
            clearInput()
    }

    function clearInput(){
        setValue('')
    }

    return(
        <form>
            <input  type="text"
                    placeholder='Search Artifacts'
                    className='search-form'
                    name='searchValue'
                    value={searchValue}
                    onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick = {(e) => displaySearch(e.target.value)}
            >Search</button>
        </form>
    )
}

//onclick what is this doing
//It is sending a variable to the search