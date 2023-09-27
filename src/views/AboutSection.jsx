import './css/AboutSection.scss'
import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
import React, { useEffect } from "react";
import SetObserver from './js/observer.js'
function Services() {
  let animationTrigerEl = "#solarWorks";
  if(window.innerWidth < 768){
    animationTrigerEl = "#animationActivation";
  }  
  

  function observerCallBack(){
    document.getElementById('solarWorksWeDoContainer').classList.add('solarWorksTransit');
  }
  
  useEffect(()=>{
    SetObserver("solarWorks", 0.3 , 0.3, observerCallBack);
  });


  return (
    <div>
      {/* <h3>ABOUT</h3> */}
   
    <div id="solarWorks"  className=' solarWorksSectionWrapper' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6160742e58596279bef906ba/119f2365-94ce-4297-a809-64faedbe1828/white_bgArtboard+15+copy+4%404x.png')"}}>
          
      
      <div className='infoBar'>
        
        <img src='./img/avatar.png' height={220} width={200} alt=''></img>
          <div>
            <p>Dr. Tariq</p>
            <p> Maths & Science Tutor</p>
            <p>07783008078</p>       
            <p>mytutoroo@yahoo.co.uk</p>
            <p>SALFORD</p>
          </div>
       </div>
        <div id="solarWorksWeDoContainer" className='worksWeDoContainer'>
          <h4 className='SolarPowerWorksHeader'>ABOUT </h4>
          <WorksWeDo header= {"Qualified Maths teacher "}  body={" over 15 years’ experience"}/>
          <WorksWeDo header= {"Experience"}  body={"Key Stage 3 & 4 and ‘A’ level."}/>
          <WorksWeDo header= {"Chemistry and Maths "}  body={"(BSc Joint Hons), PGCE (Maths)."}/>
          <WorksWeDo header= {"MSc and PhD. "}  body={"Also a qualified Psychotherapist"}/>
          <WorksWeDo header= {"Chemistry and Maths "}  body={"(BSc Joint Hons), PGCE (Maths)."}/>
          <WorksWeDo header= {"Chemistry and Maths "}  body={"(BSc Joint Hons), PGCE (Maths)."}/>
        </div>
   
    </div>
    </div>
  )
}

export default Services;