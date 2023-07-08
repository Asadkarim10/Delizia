import React from 'react' 
import './header.css'
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Header() {
    return (
        <div>
            
            <div className='Footer'> 



            <div className='Policy'>
                <div  >POWERED BY</div>
                <div className='Details'><Link to="/contact" style={{color: 'white'}}>IndoIJ</Link></div>
                <div className='Details'><Link to="/contact" style={{color: 'white'}} >Privacy Policy</Link></div>
                <div className='Details'><Link to="/contact" style={{color: 'white'}}>FAQS</Link></div>
            </div>



            </div>


        </div>
    )
}