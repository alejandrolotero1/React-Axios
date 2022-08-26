/*
import React from 'react'
import { useState, useEffect } from "react"
import {AiFillEye} from 'react-icons/ai'
// import {BsFillEyeSlashFill} from 'react/icons/bs'

function Password() {
  const [passwordData, setpasswordData] = useState('')
  const [passwordDataV, setpasswordDataV] = useState('')
  const [textValidate, setTextValidate] = useState('')
  const [changePassword, setChangePassword] = useState('text')
  const [numChange, setnumChange] = useState(0)

  const regularExpressions = {
    name:/^[a-z ,.'-]+$/i,
    username:/^[a-zA-Z0-9\_\-]{4,16}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^.{4,12}$/,
  }
  
  const CapturePassword = (e) =>{
    setpasswordData(e.target.value)
  }

  const CapturePasswordV = (e) =>{
    setpasswordDataV(e.target.value)
  }

useEffect(()=>{

    passwordData == passwordDataV?          
      setTextValidate('')
      :
      setTextValidate('Contraseña incorrecta')
  },[passwordData, passwordDataV])

const changePasswordBtn = () => {
  setnumChange(numChange + 1)
  if(numChange % 2 == 0){
  setChangePassword('password')
  }
  else{
    setChangePassword('text')
  }
}
  return (
    <div className='contentInputsData'>
        <input type={changePassword}  placeholder='Contraseña' className='inputs' onChange={CapturePassword}/>
        <input type={changePassword} placeholder="Valide contraseña" className='inputs' onChange={CapturePasswordV}/>
        <button onClick={changePasswordBtn}><AiFillEye /></button>
        <p className='textValidate'>{textValidate}</p>
    </div>
  )
}

export default Password
*/