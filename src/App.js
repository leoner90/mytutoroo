import React from 'react';
 
import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import NavBarRu from './components/header/NavBarRu.jsx'
import HeaderInfoBar from './components/headerInfoBar/headerInfoBar.jsx'
 

 
import './App.scss'
//  "homepage": "https://cvportfolio.online/portfolio/msgrupa/",
//REDUX (default import store/index.js)
import { Provider } from 'react-redux'
import store from './store'




 
 
function App() {
 

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  let language = getCookie("currentLanguage");
  return (
    <div  className="App"  style={{ backgroundImage: "url('./mainBg.jpg')" }} >
        <div>
            <HeaderInfoBar />
            {language === 'ru'  ?  <NavBarRu /> :  <NavBar />}
           
            
            <div id="BodyWrapper" className='BodyWrapper'>
              <Provider store={store}>
                <Router />
              </Provider>
            </div>
            
        </div>
    </div>
  );
}

export default App;
