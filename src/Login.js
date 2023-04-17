import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then(result => {
            console.log(result);
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            })
          })
          .catch((error) => {
            alert(error.message);
          })
    }



  return (
    <div className='login'>
       <div className='login__container'>
        <img
            src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png'
            alt=""
        />

        <h1> Sign in to CraZyCr7</h1>
            <p>CraZyCr7.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
       </div> 
    </div>
  )
}

export default Login