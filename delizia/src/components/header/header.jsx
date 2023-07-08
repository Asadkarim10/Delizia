import React from 'react' 
import './header.css'
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Header() {
    return (
        <div>
            
            <div className='Footer'> 
            <div className='card'>
            <img src="./src/assets/card.webp" alt="Asad" />
            </div>
            <div className='Policy'>
                <div  >POWERED BY</div>
                <div className='Indoij'><Link to="/contact" style={{color: 'white'}}>IndoIJ</Link> <span> | </span></div>
                <div className='Details'><Link to="/contact" style={{color: 'white' , marginRight:'5px' }} >Privacy Policy</Link> <span> | </span> </div>
                <div className='Details'><Link to="/contact" style={{color: 'white'}}>FAQS</Link> </div>
            </div>



            </div>


        </div>
    )
}