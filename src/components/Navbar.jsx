
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container"> 
            <div className="nav-element"><Link to="/">Etusivu</Link></div>
            <div className="nav-element"><Link to="/ilmoitus">Ilmoitus</Link> </div>
            <div className="nav-element">Hujausviestin tunnistuspeli</div> 
            <div className="nav-element">Näin tunisat hujausviestin</div> 
            <div className="nav-element">Tarinat</div>   
        </div>
    )
}



export default Navbar