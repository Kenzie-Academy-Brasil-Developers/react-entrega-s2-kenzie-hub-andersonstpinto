import { Container } from './style'
import { SignupForm } from '../../components/SignupForm'
import { Header } from '../../components/Header'

export const SignupPage = () => {
  return (
    <Container>
      <Header />
      <SignupForm />
    </Container>
  )
}
