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
          if (entry.intersectionRatio >  0.3) {
            document.getElementById('solarWorksWeDoContainer').classList.add('solarWorksTransit');
            let unobserve = document.querySelector(animationTrigerEl);
            observer.unobserve(unobserve)
          } 
          
        });
      };


    let options3 = {
        root: document.querySelector("#solarWorks"),
        rootMargin: "0px",
        threshold:  0.3,
      };
        
      let observer = new IntersectionObserver(callback3, options3);
    
      useEffect(()=>{
     

        let target = document.querySelector(animationTrigerEl);
        observer.observe(target);
      });


    return (
        <div id="solarWorks"  className=' solarWorksSectionWrapper'>
            <div className='solarPowerWorks'>
            <h4 className='SolarPowerWorksHeader'>УСТАНОВКА СОЛНЕЧНЫХ ПАНЕЛЕЙ</h4>
                <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
                    <WorksWeDo header= {"Настройка инвертора"}  imgName={"invertors.png"}/>
                    <WorksWeDo header= {"Инспекция проекта"}  imgName={"plan.png"}/>
                    <WorksWeDo header= {"Измерения электроустановок"}  imgName={"measurements.png"}/>
                    <WorksWeDo header= {"Установка"}  imgName={"workProcess.png"}/>
                    <WorksWeDo header= {"Сертифицированные специалисты"}  imgName={"certificate.png"}/>
                </div>
              
            </div>
            <div id="animationActivation" className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower2.jpeg"'}}></div>
        </div>
    )
}

export default SolarSection;