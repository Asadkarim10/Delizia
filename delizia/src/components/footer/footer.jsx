import React from 'react';
import './footer.css';


export default function Footer() {
    return (

        <div className='Container'>

            <div className='btncon'>
                <button className='btn' >
                    <span>Icon</span>
                    <div>
                        <span className='loc' >Change Location</span>
                        <br />
                        <span className='loc' >Garden</span>
                    </div>
                </button>
                <button className='btn1'>
                    <div>
                        <span>Icon</span>
                        <span className='num'>021 111 359 111</span>
                    </div>
                </button>
            </div>

            {/* logo */}

                <div className='logo'>
                <img src="/src/assets/LOGO.webp"  alt="" />
                </div>



            <div className='lastbox'>
            <div className='box2'>logo</div>
            <button className='box2'>logo</button>
            </div>

        </div>

    )
}



