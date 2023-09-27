import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faEnvelopeCircleCheck , faPlus , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from "react";
import './emailForm.scss'
import { useSendEmailMutation } from '../../store/services.js'
import { useSelector } from 'react-redux';

function EmailForm () {
    const [ServerCall, { isError, isLoading }] = useSendEmailMutation();
    console.log(isError , isLoading )
    const [senderName, setSenderName] = useState('');
    const [userMsg, setuserMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState([]);
    const [errSuccessMsg, setErrSuccessMsg] = useState([]);
    const [loaderWrapperState, setLoaderWrapperState] = useState('none');
    const [succesMsgWrapper, setSuccesMsgWrapper] = useState('none');
    function toggleEmailLoader() {
        setLoaderWrapperState('none');
    }

    let errors = useSelector(state => state.sendMail.errors);
    let success = useSelector(state => state.sendMail.success)
    useEffect(()=>{
        setErrSuccessMsg(errors);
        if(success === 200) {
            setTimeout(toggleEmailLoader, 500);
            setTimeout(clearAllMsgShowSuccces, 500);
        } else  {
            setTimeout(toggleEmailLoader, 500);
        }
    }, [errors,success]);


    function clearAllMsgShowSuccces(){
        setSenderName('');
        setuserMsg('');
        setUserEmail('');
        setUserPhone('');
        setErrSuccessMsg([])
        setSuccesMsgWrapper('flex');
    }

    function sendEmail(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', senderName);
        formData.append('msg', userMsg);
        formData.append('email', userEmail);
        formData.append('userPhone', userPhone);
        ServerCall(formData);
        setLoaderWrapperState('flex');

    }


    return (
        <div className='emailFormWrapper'>
            
            <div id='loaderWrapper' style={{display: loaderWrapperState}}>
            <div className="loader"></div>
            <p>Sending...</p>
            </div>

            <div id='SuccesWrapper' style={{display: succesMsgWrapper}}>
            <div className="success">
            <p>
                <FontAwesomeIcon className='successMsgAwesomeIcon'  icon={faEnvelopeCircleCheck} />
                Ziņojums ir veiksmīgi nosūtīts
            </p>
            </div>
            <button className='sendOnotherMsgBtn' onClick={()=> setSuccesMsgWrapper('none')}>
                Send on more 
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

            <form className='emailForm' >
                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Name *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={senderName} id="fname" name="firstname" placeholder="Vārds" onChange={(e)=> setSenderName(e.target.value)}/>       
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>Phone  *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={userPhone}  name="phone" placeholder="Telefona numurs" onChange={(e)=> setUserPhone(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper'>
                    <div className='NameLabel'>E-mail *</div>
                    <div className='formFullNameWrapper'>
                        <input type="text" value={userEmail}  name="email" placeholder="E-pasts" onChange={(e)=> setUserEmail(e.target.value)}/>
                    </div>
                </div>

                <div className='NameSectionWrapper messageWraper'>
                    <div className='NameLabel'>Message *</div>
                    <div className='formFullNameWrapper textAreaWrapper'>
                        <textarea value={userMsg} placeholder="Ziņojuma teksts" onChange={(e)=> setuserMsg(e.target.value)}></textarea>
                    </div>
                </div>

                <button className='ContactFormSubmitBtn' type="submit" onClick={(e)=> sendEmail(e)}> 
                    <FontAwesomeIcon className='faEnvelopeSendMsg' icon={faEnvelope} /> 
                    SEND
                </button>
            </form>
        </div>
    )
}

export default EmailForm;