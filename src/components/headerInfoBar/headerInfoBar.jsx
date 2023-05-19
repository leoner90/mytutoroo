import './headerInfoBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function headerInfoBar() {

    function fontAwesome(value, className) {
        return <FontAwesomeIcon className={className} icon={value} />
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        window.location.reload(true);
      }

      
    return (
        <div className='contactInfo'>
            <div className='headerPhoneNum'>  {fontAwesome(faPhone)} +371 2844 3219</div>
            <div className='languageBtn'  onClick={() => setCookie('currentLanguage' , 'ru' , 2)}>RU</div>
            <div className='languageBtn' onClick={() => setCookie('currentLanguage' , 'lv' , 2)}>LV</div>
        </div>
    )
}

export default headerInfoBar;