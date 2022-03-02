import { LoginForm } from '../../components/LoginForm'
import Logo from '../../assets/imgs/Logo.svg'
import { LoginContainer } from './style'

export const LoginPage = () => {
  return (
    <LoginContainer>
      <img src={Logo} alt='' />
      <LoginForm />
    </LoginContainer>
  )
}
