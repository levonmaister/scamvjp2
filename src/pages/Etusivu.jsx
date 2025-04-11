

import { useState } from 'react'
import React from 'react'
import Peli from '../components/Peli.jsx'

const Etusivu = () => {

    const [peli, setPeli] = useState(false)

    if(peli){
        return(
            <div>
                <Peli />
                <button onClick={()=>setPeli(false)}>Quit game</button>
            </div>
        )
    }
    else{
    return(
        <div>
            <h1>Etusivu</h1>
            <p>Pelaa meiän peli pliiiis</p>

            <button onClick={()=>setPeli(true)}>Start game</button>

        </div>
    )
    }

}



export default Etusivu