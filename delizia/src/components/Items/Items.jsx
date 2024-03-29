import React, { useEffect } from 'react';
import './items.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Items() {
   
    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div>
    
        <div className='header' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >

            
            <div className='Items-box '>

            <div className='Items-boxs' style={{width:'50px', alignSelf:'center', display:'flex', flexDirection:'column'}} >  
            <img src="./cake.webp" className='items' alt="cake" style={{height:'40px'}} />
            <div>
                <h3 style={{ marginLeft:'5px', marginTop:'10px', fontSize:15, color:'#d3ad78'}}>cake</h3>
            </div>
            </div>    
            </div>

            <div className='Items-box'>

            <div className='Items-boxs' style={{width:'50px', alignSelf:'center', display:'flex', flexDirection:'column'}} >  
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351912-donut.png&w=48&q=75" className='items' alt="donut"style={{height:'40px'}} />
            <div>
                <h3 style={{ marginLeft:'5px', marginTop:'10px', fontSize:15, color:'#d3ad78'}}>Donuts</h3>
            </div>
            </div>    
            </div>


            <div className='Items-box'>

            <div className='Items-boxs' style={{width:'50px', alignSelf:'center', display:'flex', flexDirection:'column'}} >  
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351922-cupcake.png&w=48&q=75" className='items' alt="donut"style={{height:'40px'}} />
            <div>
                <h3 style={{ marginLeft:'5px', marginTop:'10px', width:'100px', fontSize:15, color:'#d3ad78'}}>cup-cake</h3>
            </div>
            </div>    
            </div>


            
            <div className='Items-box'>

            <div className='Items-boxs' style={{width:'50px', alignSelf:'center', display:'flex', flexDirection:'column'}} >  
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351944-brownie.png&w=48&q=75" className='items' alt="donut"style={{height:'40px'}} />
            <div>
                <h3 style={{ marginLeft:'5px', marginTop:'10px', fontSize:15, color:'#d3ad78'}}>Brownie</h3>
            </div>
            </div>    
            </div>



            <div className='Items-box'>

<div className='Items-boxs' style={{width:'50px', alignSelf:'center', display:'flex', flexDirection:'column'}} >  
<img  src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351951-dessert.png&w=48&q=75" className='items' alt="donut"style={{height:'40px'}} />
<div>
    <h3 style={{ marginLeft:'5px', marginTop:'10px', fontSize:15, color:'#d3ad78'}}>dessert</h3>
</div>
</div>    
</div>


          
        </div>



        <div className='Box'>

        <div className='searchBox'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="2" stroke="#393d40" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="search" className='searchbar'  id="inputID" placeholder='Search on item bv title...' placeholderColor="#73757d" />
        </div>

        </div>






        <div className="itempic" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
            
        <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694209-cake-min.jpg&w=1920&q=75" className='itemimg' alt="brownie" />        
        </div>


        </div>
    )
}