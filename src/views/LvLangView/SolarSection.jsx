import '../css/solarPowerSection.scss'
import WorksWeDo from '../../components/worksWeDo/WorksWeDo.jsx'
import React, { useEffect } from "react";
function SolarSection() {
  let animationTrigerEl = "#solarWorks";
  if(window.innerWidth < 768){
    animationTrigerEl = "#animationActivation";
  }  
  
  let callback3 = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.3) {
          document.getElementById('solarWorksWeDoContainer').classList.add('solarWorksTransit');
          let unobserve = document.querySelector(animationTrigerEl);
          observer.unobserve(unobserve)
        } 
        
      });
    };


    let options3 = {
        root: document.querySelector("#solarWorks"),
        rootMargin: "0px",
        threshold: 0.3,
      };
        
      let observer = new IntersectionObserver(callback3, options3);
    
      useEffect(()=>{
       
        let target = document.querySelector(animationTrigerEl);
        observer.observe(target);
      });


    return (
        <div id="solarWorks"  className=' solarWorksSectionWrapper'>
            <div className='solarPowerWorks'>
            <h4 className='SolarPowerWorksHeader'>SAULES  PANEĻU UZSTĀDĪŠANA</h4>
                <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
                    <WorksWeDo header= {"Invertora  iestatīšana"}  imgName={"invertors.png"}/>
                    <WorksWeDo header= {"Projektu pārbaude"}  imgName={"plan.png"}/>
                    <WorksWeDo header= {"Elektroinstalācijas mērijumi"}  imgName={"measurements.png"}/>
                    <WorksWeDo header= {"Veicam montāžu"}  imgName={"workProcess.png"}/>
                    <WorksWeDo header= {"Sertificēti speciālisti"}  imgName={"certificate.png"}/>
                </div>
              
            </div>
            <div id="animationActivation" className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower2.jpeg"'}}></div>
        </div>
    )
}

export default SolarSection;