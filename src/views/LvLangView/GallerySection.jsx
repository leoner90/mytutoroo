 import HomePageProjects from '../../components/Gallery/Gallery.jsx';
 import PopUp from '../../components/popUp/Popup.jsx';

// import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/gallery.scss'
import { useState } from "react";

function GallerySection() {
    const [currentImg, setCurrentImg] = useState(0);
 //TODO TO DB
    let allImages = [
      {header: "PLAVNIEKI", bodyText: "10 кв", imgName: "project1.jpeg" },
      {header: "BABITE", bodyText: "10 кв", imgName: "project2.jpeg" },
      {header: "SAULKRASTI", bodyText: "10 кв", imgName: "project3.jpeg" },
      {header: "KENGARAGS", bodyText: "12 кв", imgName: "project4.jpeg" },
      {header: "ZASULAUKS", bodyText: "15 кв", imgName: "project5.jpeg" },
      {header: "IMANTA", bodyText: "10 кв", imgName: "project6.jpeg" },
      {header: "ZOLITUDE", bodyText: "10 кв", imgName: "project7.jpeg" },
      {header: "PINKI", bodyText: "30 кв", imgName: "project8.jpeg" },
      {header: "Vangazi", bodyText: "20 кв", imgName: "project9.jpeg" },
      {header: "SAULKRASTI", bodyText: "11 кв", imgName: "project10.jpeg" },
      {header: "PREILI", bodyText: "10 кв", imgName: "project11.jpeg" },
      {header: "OGRE", bodyText: "10 кв", imgName: "project13.jpeg" },
      {header: "VECMILGRAVIS", bodyText: "10 кв", imgName: "project14.jpeg" },
      {header: "OSTA", bodyText: "10 кв", imgName: "project15.jpeg" },
      {header: "KULDIGA", bodyText: "10 кв", imgName: "project16.jpeg" },
      {header: "SIGULDA", bodyText: "10 кв", imgName: "project17.jpeg" },
      {header: "VANGAZI", bodyText: "10 кв", imgName: "project18.jpeg" },
      {header: "LONE", bodyText: "10 кв", imgName: "project19.jpeg" },
      {header: "JEKABPILS", bodyText: "10 кв", imgName: "project20.jpeg" },
      {header: "JELGAVA", bodyText: "10 кв", imgName: "project21.jpeg" },
      {header: "OLAINE", bodyText: "10 кв", imgName: "project22.jpeg" },
      {header: "MADONA", bodyText: "10 кв", imgName: "project23.jpeg" },
      {header: "VECRIGA", bodyText: "10 кв", imgName: "project24.jpeg" },
      {header: "JURMALA", bodyText: "10 кв", imgName: "project25.jpeg" },
      {header: "JURMALA", bodyText: "10 кв", imgName: "project26.jpeg" }
        
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
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                rows: 3,
              }
            },

            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  rows: 2,
                }
              },

              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  rows: 1,
                  dots: false,
                  arrows: false,
                }
              }
        ]
      };
      
      function ShowModal(index){
        setCurrentImg(index)
        document.getElementById('viewPostModalWrapper').style.display = "block";
        document.body.style.overflow = 'hidden';
        document.getElementById("html").style.overflow = 'hidden';
      
      }

      function closeReadMoremodal() {
        let el = document.getElementById('viewPostModalWrapper');
        el.style.display = "none";  
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