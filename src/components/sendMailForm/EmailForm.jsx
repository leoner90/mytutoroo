import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faEnvelopeCircleCheck , faPlus , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import React, {useState } from 'react';
import './emailForm.scss'

function EmailForm () {
    let url = `http://localhost:80/sendEmail.php`;
    const [senderName, setSenderName] = useState('');
    const [senderSurname, setSenderSurname] = useState('');
    const [userMsg, setuserMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errSuccessMsg, setErrSuccessMsg] = useState([]);
    
    function toggleEmailLoader() {
        let loader = document.getElementById('loaderWrapper');
        loader.style.display = "none";
    }

    function clearAllMsgShowSuccces(){
        setSenderName('');
        setSenderSurname('');
        setuserMsg('');
        setUserEmail('');
        setErrSuccessMsg([])
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "flex";
    }

    function sendEmail(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', senderName);
        formData.append('surname', senderSurname);
        formData.append('msg', userMsg);
        formData.append('email', userEmail);

        const requestOptions = {
            method: 'POST',
            mode: "cors",
            enctype: 'multipart/form-data',
            body: formData
        }

        let loader = document.getElementById('loaderWrapper');
        
        loader.style.display = "flex";
        fetch(url , requestOptions)
        .then((response) => response.json())
        .then(data => {
            if(data === 200) {
                setTimeout(toggleEmailLoader, 500);
                setTimeout(clearAllMsgShowSuccces, 500);
                
        
            } else {
                setErrSuccessMsg(data);
            }
            setTimeout(toggleEmailLoader, 500);
            
      
        }).catch(err => {
            setTimeout(toggleEmailLoader, 500);
            setErrSuccessMsg('err')
        })
    }

    function sendOnotherMsg(){
        let succesMsgWrapper = document.getElementById('SuccesWrapper');
        succesMsgWrapper.style.display = "none";
    }



    return (
        <div>
            <h3 className='ContactFormHeader'>Sazināties Ar Mums</h3>
            <div id='loaderWrapper'>
            <div className="loader"></div>
            <p>Sending...</p>
            </div>

            <div id='SuccesWrapper'>
            <div className="success">
            <p>
                <FontAwesomeIcon className='successMsgAwesomeIcon'  icon={faEnvelopeCircleCheck} />
                Message Sent Successfully
            </p>
            </div>
            <button className='sendOnotherMsgBtn' onClick={()=> sendOnotherMsg()}>
                Send One More   
                <FontAwesomeIcon className='sendOnotherMsgAwasomeIcon'  icon={faPlus} />
            </button>
            </div>

            <div className='errMsgAligner'>
            {errSuccessMsg.map((err, index) => { 
            return (
                <p className='errMsg' key={index}>
                    <FontAwesomeIcon className='errorAwesomeIcon' icon={faTriangleExclamation} />
                    {err}
                </p>
            )
            })}
            </div>

            <form >
                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Vārds, Uzvārds *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={senderName} id="fname" name="firstname" placeholder="Vārds" onChange={(e)=> setSenderName(e.target.value)}/>
                        <input type="text" value={senderSurname} id="lname" name="lastname" placeholder="Uzvārds" onChange={(e)=> setSenderSurname(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Telefona numurs *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={userEmail}  name="phone" placeholder="Telefona numurs" onChange={(e)=> setUserEmail(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>E-pasts *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={userEmail}  name="email" placeholder="E-pasts" onChange={(e)=> setUserEmail(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Ziņojums*</div>
                    <div className='formFullNameWrapper'>
                        <textarea value={userMsg} placeholder="Ziņojuma teksts" onChange={(e)=> setuserMsg(e.target.value)}></textarea>
                    </div>
                </div>

                <button className='ContactFormSubmitBtn' type="submit" onClick={(e)=> sendEmail(e)}> 
                    <FontAwesomeIcon className='faEnvelopeSendMsg' icon={faEnvelope} /> 
                    NOSŪTĪT
                </button>
            </form>
        </div>
    )
}

export default EmailForm;