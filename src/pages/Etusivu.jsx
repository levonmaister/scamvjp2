

import { useState } from 'react'
import React from 'react'
import ViestiPeli from '../components/Peli.jsx'
import '../styles/etusivu.css';
import NumerotValehtelee from './NumerotValehtelee.jsx';
import HorrorStories from './HorroStories.jsx';
import handbild from "../pictures/handbild.png"
import Checklist from "./Checklist.jsx"
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Etusivu = () => {
    const location = useLocation();
    useEffect(()=> {
        if (location.state?.section) {
            document.getElementById(location.state.section)?.scrollIntoView({behavior: "smooth"});
        }
    }, [location]);

    const [peli, setPeli] = useState(false)
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate();

        
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
                        navigate('/peli');
                        }}
                        className={clicked ? 'clicked-button' : 'default-button'}
                    >Pelaa peliä</button>

                    <div className="handbild-container">
                        <img src={handbild} alt="puhelinkadessa" />
                    </div>
                
                </div>

                <div className="checklistlayout">
                    <h2 className="checklist-title">ÄLÄ MENE LANKAAN <br /> Näin tunnistat huijausviestin:</h2>
                    <Checklist/>
                </div>

                <div className="numerotLayout">
                    <NumerotValehtelee />
                </div>
                <div id="tarinat" className="storiesLayout">
                    <HorrorStories />
                </div>
                <Footer />
            </div>
            
        );
    }




export default Etusivu;