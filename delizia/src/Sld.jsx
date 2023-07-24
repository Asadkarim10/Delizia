import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });


function Sld() {
  return <div
  id="carouselExampleSlidesOnly"
   className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[150ms]  ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="public/item.webp"        
        className="block w-full"
        alt="Wild Landscape" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[150ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
      src="public/item1.webp"        
      className="block w-full"
        alt="Camera" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[1sec] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="public/item.webp"
        className="block w-full"
        alt="Exotic Fruits" />
    </div>

    
  </div>
</div>
}

export default Sld


