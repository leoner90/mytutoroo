import './headerInfoBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function headerInfoBar() {

    function fontAwesome(value, className) {
        return <FontAwesomeIcon className={className} icon={value} />
    }

    function setCookie(cname, cvalue, exdays,reload) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
       if(reload) { window.location.reload(true)}
      }

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
    
    

      function cookiesAgree() {
        setCookie('isCookiesAgreed' , true , 2);
        let el = document.querySelector("#cookiesID");
        el.classList.add('displayNone');  
      }
      let isCookiesAgreed = getCookie("isCookiesAgreed");
      let language = getCookie("currentLanguage");
    return (
        <div  className='contactInfo'>
            <div className='headerPhoneNum'>  {fontAwesome(faPhone)} +371 2914 5975</div>
            <div className='languageBtn'  onClick={() => setCookie('currentLanguage' , 'ru' , 2,true)}>RU</div>
            <div className='languageBtn' onClick={() => setCookie('currentLanguage' , 'lv' , 2 , true)}>LV</div>
            <div id="cookiesID"  className={isCookiesAgreed ? 'displayNone' : 'cookies'} >
                {language === 'ru'  ? 'Мы используем файлы cookie' :  'Mēs izmantojam sīkdatnes'}
                
                <button className='cookiesAgreeBtn' onClick={() => { cookiesAgree();}}>OK</button>
            </div>
        </div>
    )
}

export default headerInfoBar;