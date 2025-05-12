

import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import MyDropzone from '../components/Dropzone'
import '../styles/ilmoitus.css';







const IlmoitusSivu = () => {





    return(
        <div>
            <h1>Ilmoita huijaus</h1>

<div className='form-div'>
            <form>

            <div className='personal-information-container'>
                <label>
                    Nimi:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Sähköposti:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Puhelinnumero:
                    <input type="tel" name="phone" />
                </label>
                <br />
                <label>
                    Huijauskuvaus:
                    <textarea name="description" />
                </label>
                <br />
               


                </div>

                <br />
                <br />
               
            
            
            <MyDropzone />

            <button type="submit">Lähetä</button>
            </form>

            </div>
        </div>
    )

}



export default IlmoitusSivu