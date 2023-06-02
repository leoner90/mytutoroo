import '../css/mapSection.scss'
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
function MapSection() {
    const [solarProjects, SetSolarProjects] = useState(0);
    const [electroProjects, SetElectroProjects] = useState(0);

    let callback5 = function(entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            let target = document.querySelectorAll(".InfoArrow");
            for (var i = 0; i < target.length; ++i) {
                    target[i].classList.add('InfoArrowAnimation');
                    target[i].style.animationDelay = i/ 1.5 + "s";
             }  
             let target11 = document.querySelector("#stepsContentWrapper");
             observer.unobserve(target11)
          } 
        });
      };

    let options5 = {
        root: document.querySelector("#stepsContentWrapper"),
        rootMargin: "0px",
        threshold: 0.3,
      };
        
      let observer = new IntersectionObserver(callback5, options5);

    //   ________________
    function percentIncrease(value,i) {
        setTimeout(function() {       
            i = i + 80 ;           
            if (i <= value) { 
                SetSolarProjects(i);
                percentIncrease(value,i)            
            }                        
          }, 16 )
    }

    function percentIncreaseElectro(value,i) {
        setTimeout(function() {       
            i = i + 1;                    
            if (i <= value) { 
                SetElectroProjects(i);
                percentIncreaseElectro(value,i)            
            }                        
          }, 3.63 )
    }

    let callback6 = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                let target = document.querySelectorAll(".progressBarInner");
                percentIncrease(10000,0)
                percentIncreaseElectro(550,0)
                for (var i = 0; i < target.length; ++i) {
                        target[i].classList.add('fillProgressBar');
                        let target2 = document.querySelector("#clientCountProgressBars");
                        observer2.unobserve(target2)
                }  
            } 
        });
    };


    let options6 = {
        root: document.querySelector("#clientCountProgressBars"),
        rootMargin: "0px",
        threshold: 0.3,
    };
        
    let observer2 = new IntersectionObserver(callback6, options6);


 

    useEffect(()=>{   
        let target = document.querySelector("#stepsContentWrapper");
        observer.observe(target);

        let target2 = document.querySelector("#clientCountProgressBars");
        observer2.observe(target2);
    }, []);

    return (
        <div id="clientProgress" className='MapSection'>
        <div>
            <h3  className='mapSectionHeader'>SASNIEDZIET REZULTĀTUS KOPĀ AR MUMS!</h3>
            <div className='stepsToPerformSolarOrderWrapper'>
                <div id="stepsContentWrapper" className='stepsContentWrapper'>
                    <Link to={`contacts`}  smooth={true} > 
                        <div className='stepsImgWrapper'>
                            <img className='stepsImg' src='./img/priceList.png' alt="asd" />
                        </div>
                        <h4 className='stepsHeader'>SAŅEMT PIEDĀVĀJUMU</h4>   
                    </Link>
                </div>
                <div className='InfoArrow'>
                    <img  className='InfoArrowImg' src='https://static.vecteezy.com/system/resources/previews/009/351/335/original/arrow-icon-arrows-sign-black-arrows-free-png.png' alt='' />
                </div>
                <div className='stepsContentWrapper'>
                    <div className='stepsImgWrapper'>
                        <img className='stepsImg' src='./img/agreementLogo.png' alt="asd"  />
                    </div>
                    <h4 className='stepsHeader' >NOSLĒGT LĪGUMU</h4>   
                </div>

                <div className='InfoArrow'>
                    <img className='InfoArrowImg rotateArrow' src='https://static.vecteezy.com/system/resources/previews/009/351/335/original/arrow-icon-arrows-sign-black-arrows-free-png.png' alt='' />
                </div>


                <div className='stepsContentWrapper'>
                    <div className='stepsImgWrapper'>
                        <img className='stepsImg' src='./img/gearLogo.png' alt="asd"  />
                    </div>
                    <h4 className='stepsHeader'>UZSTĀDĪŠANA</h4>           
                </div>

                <div className='InfoArrow'>
                    <img className='InfoArrowImg' src='https://static.vecteezy.com/system/resources/previews/009/351/335/original/arrow-icon-arrows-sign-black-arrows-free-png.png' alt='' />
                </div>
                <div className='stepsContentWrapper'>
                    <div className='stepsImgWrapper'>
                        <img className='stepsImg' src='./img/energyLogo.png' alt="asd"  />
                    </div>
                    <h4 className='stepsHeader'>IZBAUDI REZULTĀTU</h4>           
                </div>   
            </div>
        </div>
        <img className='LvmapImg' src="./img/LVmap.png" alt='LVmap'/>
        <div className='flex'>
            <div className='clientCount'>
                MĒS PARŪPĒJĀMIES<br />
                JAU VAIRĀK NEKĀ PAR 500<br />
                KLIENTIEM     
            </div>
            <div id="clientCountProgressBars" className='clientCountProgressBar' style={{backgroundImage: 'url("./img/clientsBG.jpg"'}}>
                <p className='progressbarHeader'>UZSTĀDĪTI SAULES PANEĻI:</p>
                <div className='progressBarOuter'>
                    <div className='progressBarInner ' > 
                    <div className='percentage'>{solarProjects} + </div>
                </div>
                </div>
                    <p className='progressbarHeader'>ELEKTROMONTĀŽAS DARBI:</p>
                    <div className='progressBarOuter'>
                        <div className='progressBarInner ' >
                            <div className='percentage'>{electroProjects} + </div>             
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MapSection;