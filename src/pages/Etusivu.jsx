

import { useState } from 'react'
import React from 'react'
import ViestiPeli from '../components/Peli.jsx'
import '../styles/etusivu.css';
import NumerotValehtelee from './NumerotValehtelee.jsx';
import HorrorStories from './HorroStories.jsx';
import handbild from "../pictures/handbild.png"


const Etusivu = () => {

    const [peli, setPeli] = useState(false)
    const [clicked, setClicked] = useState(false)

    if(peli){
        return(
            <div>
                <button onClick={()=> {
                    setPeli(false); 
                    setClicked(false);
                    }}
                    className={clicked ? 'clicked-button' : 'default-button'}
                >Lopeta peli </button>
                <ViestiPeli />
            </div>
        );
    } else {
        return(
            <div>
                <div className="layout">
                    <div className="rubrik">
                        <p>SAITKO TEKSTIVIESTIN? <br/>TUNNISTATKO HUIJAUKSEN?</p>
                    </div>
                    <div className="text">
                        <p>Tektsiviestihuijaukset käyvät yhä ovelimmiksi. <br/>Opi suojaamaan itsesi - ja testaa taitosi</p>
                    </div>

                    <button onClick={()=>{
                        setPeli(true);
                        setClicked(true)
                        }}
                        className={clicked ? 'clicked-button' : 'default-button'}
                    >Pelaa peli</button>
                
                </div>

                <div className="numerotLayout">
                    <NumerotValehtelee />
                </div>
                <div id="tarinat" className="storiesLayout">
                    <HorrorStories />
                </div>
            </div>
        );
    }

};



export default Etusivu;