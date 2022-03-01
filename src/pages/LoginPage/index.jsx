import { LoginForm } from '../../components/LoginForm'
import Logo from '../../assets/imgs/Logo.svg'
import { Container } from './style'

export const LoginPage = () => {
  return (
    <Container>
      <img src={Logo} alt='' />
      <LoginForm />
    </Container>
  )
}
