import React from 'react' 
import './footer.css'
// import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Footer() {
    return (
        <div>
            
            <div className='Footer'> 
            <div className='pcard'>
            <img  className='headerimg' src="./card.webp" alt="Asad" />
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