import SliderAbout from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/aboutSection.scss'
import { Link } from "react-scroll";




let allImages = [
    { imgName: "slider1.jpeg" },
    {imgName: "slider2.jpeg" },
    { imgName: "slider3.jpeg" },
    { imgName: "slider4.jpeg" },
    {imgName: "slider5.jpeg" },
  
]


const settings123 = {
    dots: false,
    infinite: true,
    speed:  0,
    slidesToShow: 1,
    slidesToScroll:1,
    swipe: false,
    arrows: false,
    rows: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    
 
}

function AboutSection() {
    return (
      <div id="home" className="AboutWrapper" >
            <SliderAbout {...settings123}>  
            {allImages.map(function(item, i){                  
                return (
                <div  key={i}  >
                     <div className='aboutSectionSlider SliderWrap' style={{backgroundImage: 'url("./img/headerSlider/'+item.imgName+'"'}}> 
                        <div className="dimmer"></div>
                     </div>
                </div>
                )           
            })}
            </SliderAbout>
        
            <div className='HomeFirstSectionWrapper'>
                <div className='HomeAboutText'>
                    <h1 className="textAnimation">
                        SIA MsGrupa <br />
                        Saules Panelu Uzstādīšana un Elektromontāžas darbi <br />
                        Tirgū kopš 2014 gada <br />
                    </h1>
                    <Link
                        to={`contacts`} 
                        smooth={true}
                    > 
                        <button className='contactsBtn'>KONTAKTI</button>
                    </Link>
                </div>
                
            </div>
      </div>



    )
}

export default AboutSection;