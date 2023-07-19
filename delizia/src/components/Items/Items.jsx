import React from 'react' 
import './items.css'
export default function Items() {
    return (
        <div>
    
        <div className='header' >

            <div className='Items-box'>
            <img src="./src/assets/cake.webp" className='items' alt="cake" />
            </div>

            <div className='Items-box'>
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351912-donut.png&w=48&q=75" className='items' alt="donut" />
            <br /> <br />
            </div>
            <div className='Items-box'>
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351922-cupcake.png&w=48&q=75" className='items' alt="cupcake" />
            </div>

            <div className='Items-box'>
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351944-brownie.png&w=48&q=75" className='items' alt="brownie" />
            </div>

            <div className='Items-box'>
            <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678351951-dessert.png&w=48&q=75" className='items' alt="dessert" />
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






        <div className='itempic' >
            
        <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694209-cake-min.jpg&w=1920&q=75" className='itemimg' alt="brownie" />        
        </div>


        </div>
    )
}