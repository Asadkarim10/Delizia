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



        <div className='searchBox'>


        <input type="search" className='searchbar' placeholder='search on item bv title...' />
        </div>

        <div className='itempic' >
            
        <img src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694209-cake-min.jpg&w=1920&q=75" className='itemimg' alt="brownie" />        
        </div>


        </div>
    )
}