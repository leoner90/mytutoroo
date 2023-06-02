import '../css/electricalWorks.scss'
import React, { useEffect } from "react";
import WorksWeDo from '../../components/worksWeDo/WorksWeDo.jsx'

function ElectroSection() {


    let callback2 = function(entries, observer) {
        entries.forEach(entry => {
          
          if (entry.intersectionRatio > 0) {
            document.getElementById('ElectroWorksWeDoWrapper').classList.add('electroWorksTransit');
            let unobserve = document.querySelector("#electroWorks");
            observer.unobserve(unobserve)
          } 
        });
      };


    let options2 = {
        root: document.querySelector("#electroWorks"),
        rootMargin: "0px",
        threshold: 0.3,
      };
        
      let observer = new IntersectionObserver(callback2, options2);
    
      useEffect(()=>{
        let target = document.querySelector("#electroWorks");
        observer.observe(target);
      });



    return (
        <div id="electroWorks" className='electritionWorksWrapper'>  
        <div  className='electritionWorksImg' style={{backgroundImage: 'url("./img/electroPower.jpg"'}}></div>
        <div className='electricPowerWorks'>
            <h4 className='electricPowerWorksHeader'>ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ</h4>
            <div id="ElectroWorksWeDoWrapper" className='worksWeDoContainer'>
                    <WorksWeDo header= {"Энергетическое строительство"}  imgName={"energyConstruction.png"}/>
                    <WorksWeDo header= {"Проектирование"}  imgName={"designing.png"}/>
                    <WorksWeDo header= {"Электроинсталяция"}  imgName={"ElectricalInstallation.png"}/>
                    <WorksWeDo header= {"Молниезащита"}  imgName={"LightningProtection.png"}/>
                    <WorksWeDo header= {"Замеры изоляции"}  imgName={"ElectricalMeasurements.png"}/>
                </div>
        </div>
    </div>
    )
}

export default ElectroSection;