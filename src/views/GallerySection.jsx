 import HomePageProjects from '../components/Gallery/Gallery.jsx';
 import { useGetTestimonialsMutation } from '../store/services.js'
 import { useSelector } from 'react-redux'
import { useState,useEffect } from "react";
import Slider from "react-slick";
import settings from './js/SlickSettings.js';
import './css/gallery.scss'

function GallerySection() {
  const [alltestimonials, setAlltestimonials] = useState( useSelector(state => state.contacts.testimonials));
  const [ServerCall, { isError, isLoading }] = useGetTestimonialsMutation();
  
  let testimonials = useSelector(state => state.contacts.testimonials)
  useEffect(()=>{
    ServerCall();
    setAlltestimonials(testimonials);
  }, [testimonials,ServerCall,isError,isLoading]);
        
  return(
    <div id="portfolio" className='gallerySectionWrapper'>
      <h2 className='galleryHeader'>TESTIMONIALS</h2> 
      <Slider {...settings}>  
        {alltestimonials.map(function(item, i){                  
          return (
            <div key={i} >
              <HomePageProjects  bodyText={item.testimonials}  />
            </div> 
          )           
        })}    
      </Slider>
    </div>
    )
}

export default GallerySection;