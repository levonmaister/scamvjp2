

import { useState } from 'react'
import React from 'react'
import Peli from '../components/Peli.jsx'
import Navbar from '../components/Navbar.jsx'

const Etusivu = () => {

    const [peli, setPeli] = useState(false)

    if(peli){
        return(
            <div>
                <Navbar />
                <Peli />
                <button onClick={()=>setPeli(false)}>Lopeta peli</button>
            </div>
        )
    }
    else{
    return(
      
        <div>
            <Navbar />
            <h1>SAITKO TEKSTIVIESTIN?</h1>
            <h1>TUNNISTATKO HUJAUKSEN?</h1>
            <div>Tektsiviestihujaukset käyvät yhä ovelimmiksi.</div>
            <div>Opi suojaamaan itsesi - ja testaa taitosi</div>

            <button onClick={()=>setPeli(true)}>Pelaa peli</button>

        </div>
    )
    }

}



export default Etusivu