import { Redirect } from 'react-router-dom'
import { LoginForm } from '../../components/LoginForm'
import Logo from '../../assets/imgs/Logo.svg'
import { LoginContainer } from './style'

export const LoginPage = ({ authState: { auth, setAuth } }) => {
  console.log(auth)
  if (auth) return <Redirect to='/dashboard' />

  return (
    <LoginContainer>
      <img src={Logo} alt='' />
      <LoginForm setAuth={setAuth} />
    </LoginContainer>
  )
}
