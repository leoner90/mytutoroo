 import HomePageProjects from '../components/Gallery/Gallery.jsx';
 import PopUp from '../components/popUp/Popup.jsx';

// import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/gallery.scss'
import { useState } from "react";

function GallerySection() {
    const [currentImg, setCurrentImg] = useState(0);
 
    let allImages = [
        {header: "RIGA", bodyText: "10kv/h", imgName: "project1.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project2.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project3.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project4.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project5.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project6.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project7.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project8.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project9.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project11.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project13.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project14.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project14.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project2.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project3.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project4.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project5.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project6.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project7.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project8.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project9.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project11.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project13.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project14.jpeg" },
        {header: "Header", bodyText: "body Text", imgName: "project14.jpeg" }
        
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        //centerMode: true,
        autoplay: true,
        arrows: true,
        rows: 3,
        //lazyLoad: progressive,
        autoplaySpeed: 9000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                rows: 1,
              }
            }
        ]
      };
      
      function ShowModal(index){
        setCurrentImg(index)
        document.getElementById('viewPostModalWrapper').style.display = "block";

      }

      function closeReadMoremodal() {
        let el = document.getElementById('viewPostModalWrapper');
        el.style.display = "none";  
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    document.addEventListener("keydown", escapePressed, false);

    function escapePressed(e) {
        var keyCode = e.keyCode;
        if(keyCode===27) {
            closeReadMoremodal();
        }
    }
 
 
    return(
        <div id="portfolio" className='gallerySectionWrapper'>
            <h2 className='galleryHeader'>MUSU DARBI</h2>
            
            <Slider {...settings}>  
                        {allImages.map(function(item, i){                  
                            return (
                                <div key={i} onClick={()=>{ShowModal(i)}}>
                                    <HomePageProjects  header= {item.header} bodyText={item.bodyText}  imgName={item.imgName} />
                                </div> 
                            )           
                        })}
                  
                
            </Slider>
            <PopUp allImg = {allImages} currentIndex={currentImg} />






 





        </div>
    )
}

export default GallerySection;