

import { useState } from 'react'
import React from 'react'
import ViestiPeli from '../components/Peli.jsx'
import '../styles/etusivu.css';
import NumerotValehtelee from './NumerotValehtelee.jsx';

const Etusivu = () => {

    const [peli, setPeli] = useState(false)

    if(peli){
        return(
            <div>
                <ViestiPeli />
                <button onClick={()=>setPeli(false)}>Lopeta peli</button>
            </div>
        );
    }
    else {
        return(
      
            <div className="layout">
                <div className="rubrik">
                    <p>SAITKO TEKSTIVIESTIN? <br/>TUNNISTATKO HUJAUKSEN?</p>
                </div>
                <div className="text">
                    <p>Tektsiviestihujaukset käyvät yhä ovelimmiksi. <br/>Opi suojaamaan itsesi - ja testaa taitosi</p>
                </div>

                <button onClick={()=>setPeli(true)}>Pelaa peli</button>


                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <NumerotValehtelee />

            </div>
        );
    }

};



export default Etusivu;