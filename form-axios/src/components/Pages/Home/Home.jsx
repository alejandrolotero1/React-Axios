import React from 'react'
import CampoName from '../CampoName/CampoName'
// import Password  from '../Password/Password'
// import Email  from '../Email/Email'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {AiFillEye} from 'react-icons/ai'

function Inicio() {
  /*---------------------------UserName-----------------------------*/
  const [userNameData, setUserNameData] = useState(' ')
  const [emailData, setEmailData] = useState(' ')
  const [apiRoute, setApiRoute] = ('https://backend-edw.herokuapp.com/usuario')

  const [infoSendApi, setInfoSendApi] = useState(false)
  const[messageUser, setMessageUser] = useState("")
  const[messageEmail, setMessageEmail] = useState("")

  /*--------------------------Password------------------------------*/
    const [passwordData, setpasswordData] = useState('')
    const [passwordDataV, setpasswordDataV] = useState('')
    const [textValidate, setTextValidate] = useState('')
    const [changePassword, setChangePassword] = useState('text')
    const [numChange, setnumChange] = useState(true)
/*---------------------expresiones regulares------------------------*/
    const regularExpressions = {
      name:/^[a-z ,.'-]+$/i,
      username:/^[a-zA-Z0-9\_\-]{4,16}$/,
      email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password:/^.{4,12}$/,
    }
  /*---------------Capture UserName and Email-----------------------*/
    const CaptureUserName = (e) =>{
      setUserNameData(e.target.value)
    }
    const CaptureUserEmail = (e) =>{
      setEmailData(e.target.value)
    }
  /*-------------------Capture Password and PasswordV----------------*/
    const CapturePassword = (e) =>{
      setpasswordData(e.target.value)
    }

    const CapturePasswordV = (e) =>{
      setpasswordDataV(e.target.value)
    }
/*------------------------------------------------------------------*/
/*-------------------Validar Contraseñas-----------------------------*/
  useEffect(()=>{
    passwordData === passwordDataV?          
      setTextValidate('')
      :
      setTextValidate('Contraseña incorrecta')
  },[passwordData, passwordDataV])

  useEffect(()=>{
    const usuario = /^[a-zA-Z\s]{1,50}$/;
    if (usuario.test(userNameData)){
    setMessageUser('')
    }
    else{
    setMessageUser("Nombre incorrecto")
    }
    },[userNameData])

  useEffect(()=>{
    const emailValidation =/^[a-zA-Z\s]{1,50}$/;
    if(emailValidation.test(emailData)){
      setMessageEmail('')
    }
    else{
      console.log("sin sentido");
      setMessageEmail("Email Incorrecto")

    }
  },[emailData])

const changePasswordBtn = () => {
  setnumChange(!numChange)
  if (numChange){
    setChangePassword('password')
  }
  else{
    setChangePassword('text')
  }
}
  //   if(numChange % 2 == 0){
      //   setChangePassword('password')
  //   }
  //   else{
  //     setChangePassword('text')
  //   }
  // }
  const sendApi = () =>{
    axios.post(`https://backend-edw.herokuapp.com/usuario`, 
    {
      "username":userNameData,
      "password":passwordData,
      "name":emailData
    })
    .then(value => {
      console.log(value);
      console.log(value.data);
    })
    .catch(console.error('Error'))
  }



  return (
    <main className='contentBackground'>
    <CampoName />
    <section className='contentMain'>
      <div className='containerForm'>
          <div className="elements">
            <button><a href="/">Registrarme</a></button>
            <button><a href="/">Iniciar Sesion</a></button>
          </div>
        <div className='contentInputsData'>
        <div className='contentTitleForm'>
          <h2 className='titleForm'>Registrate</h2>
        </div>
        <div className='contentForm'>
          <div className='ContentData'>
            <div className='data'>
              <input type="text" placeholder='Nombre de usuario' className='inputs' onBlur={CaptureUserName}/>
              <p className='textNameValidate'>{messageUser}</p>
            </div>
            <div className='data'>
              <input type="text" placeholder='Ingresa tu email' className='inputs' onBlur={CaptureUserEmail}/>
              <p className='textEmailValidate'>{messageEmail}</p>
            </div>
          </div>
        <div className='ContentData'>
          <div className='data'>
              <input type={changePassword} placeholder='Contraseña' onChange={CapturePassword} className='inputs'/>
              <button className='btnEye' onClick={changePasswordBtn}><AiFillEye /></button>
          </div>
          <div className='data'>
              <p className='textPasswordValidate'></p>
              <input type={changePassword} placeholder="Valide contraseña" className='inputs' onChange={CapturePasswordV}/>
              <p className='textValidate'>{textValidate}</p>
          </div>
        </div>  
          <button className='btnRegister' onClick={sendApi}>Registrarme</button>
        </div>
        </div>
        </div>
      </section>
    </main>
  )
}
export default Inicio