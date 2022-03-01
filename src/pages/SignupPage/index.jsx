import { Container } from './style'
import { SignupForm } from '../../components/SignupForm'
import Logo from '../../assets/imgs/Logo.svg'

export const SignupPage = () => {
  return (
    <Container>
      <img src={Logo} alt='' />
      <SignupForm />
    </Container>
  )
}
