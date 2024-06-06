import '../Form/Form.css'
import { useState } from 'react'

export function Form({getArtifacts}){
    const [searchValue, setValue] = useState('')

    function displaySearch(e){
        e.preventDefault()
            const newSearch = {
                searchValue
            }
            getArtifacts(newSearch)
            .then()
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
