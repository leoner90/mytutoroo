
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from "react";

import HomePageProjects from '../Gallery/Gallery.jsx';
import SliderPopUp  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Popup.scss'
 
function ViewPostModal (props) {
    const sliderRef = useRef();
    
    //Close Modal
    function closeReadMoremodal() {
        let el = document.getElementById('viewPostModalWrapper');
        el.style.display = "none";  
        const body = document.querySelector("body");
        body.style.overflow = "auto";
        document.body.style.overflow = 'visible'; 
        document.getElementById("html").style.overflow = 'visible';
    }
 
    document.addEventListener("keydown", escapePressed, false);

    function escapePressed(e) {
        var keyCode = e.keyCode;
        if(keyCode===27) {
            closeReadMoremodal();
        }
    }
 
     if(props.currentIndex) {
        sliderRef.current.slickGoTo(props.currentIndex)
     }
 
   
    const setup = { 
        // verticalSwiping: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        arrows: true,
        rows: 1,
        initialSlide: props.currentIndex,
        dots: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,   

              }
            }
        ]
      };
     
  
 
    return (
        <div id="viewPostModalWrapper" className="viewPostModalWrapper" >
             <div className='viewPostModalContent'>
             <button className='postViewCloseBtn'  onClick={()=> closeReadMoremodal()} > X  </button> 
             {/* AIZVĒRT */}
             <SliderPopUp {...setup} ref={sliderRef}>   
                    {props.allImg.map(function(item, i){                  
                        return (
                            <div className='PopUpContentWrapper' key={i} >
                                <HomePageProjects  header= {item.header} bodyText={item.bodyText}  imgName={item.imgName} />
                            </div> 
                        )           
                    })}
                </SliderPopUp>
            </div>
        </div>
    )
} 
export default ViewPostModal;