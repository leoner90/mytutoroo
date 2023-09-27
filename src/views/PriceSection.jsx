import './css/electricalWorks.scss'
import React, { useEffect } from "react";
import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
import SetObserver from './js/observer.js'
function ElectroSection() {
  function observerCallBack(){
    document.getElementById('ElectroWorksWeDoWrapper').classList.add('electroWorksTransit');
  }
      useEffect(()=>{
        SetObserver("electroWorks", 0.3 , 0, observerCallBack);
      }, []);

    return (
      <div id="electroWorks" className='electritionWorksWrapper'  style={{backgroundImage: "url('https://media-s3-us-east-1.ceros.com/unispace/images/2021/04/07/5761f7edc0bb18b77a8412e1e1c5924c/personality-387490988.png?imageOpt=1&fit=bounds&width=2326&crop=2735,1178,x391,y0')"}}>
        <h4 className='electricPowerWorksHeader'> Prices</h4>
        <div className='priceswrapper' >  

        <div className='electricPowerWorks'>
            
            <div id="ElectroWorksWeDoWrapper" className='worksWeDoContainer'>
                    <WorksWeDo header= {"ndividual lessons: "}  body={"£40p/h"}/>
                    <WorksWeDo header= {"Block bookings of 1 month or more:"}  body={" £35p/h"}/>
                    <WorksWeDo header= {"Group block bookings of 1 month or more"}  body={" £45p/h"}/>
                    <WorksWeDo header= {"Online Lessons"}  body={"£25p/h"}/>
                    <WorksWeDo header= {"Referral Offer"}  body={"1 hour free teaching"}/>
                </div>
        </div>

        <div  className='electritionWorksImg'>
          <div className='worksWeDoWrapper termsOfServices'>
              <div className='worksWeDoLogoWrapper'>
                <img src='./img/terms.png' alt=' ' height={50} width={50} />
                <h4>TERMS OF SERVICE:</h4>
                <p>*All prices quoted as within an 15 mile radius (Salford).</p>

                <p>*15-20 miles, there is an additional £5 travel fee</p>

                <p>*Payment through bank transfer or cash</p>

                <p> *24hr cancellation policy</p>
              </div>
           
              
          </div>
        </div>
    </div>
    </div>
    )
}

export default ElectroSection;