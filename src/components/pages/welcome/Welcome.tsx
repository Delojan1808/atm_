import React from 'react'
import MainLayout from '../../templates/mainLayout/MainLayout'
import Div from '../../atoms/div/Div'
import Button from '../../atoms/button/Button'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  const navigate=useNavigate();
  return (
    <MainLayout>
      <Div>
        <h1>Welcome to ATM of Visa</h1>
        

        <Button type={'button'} name={'Login'} className={'welcomeBtn'} onClick={()=>navigate('/login')}/>
      </Div>
    </MainLayout>
  )
}

export default Welcome