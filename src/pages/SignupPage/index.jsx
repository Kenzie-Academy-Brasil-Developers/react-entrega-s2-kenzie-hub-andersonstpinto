import { SignupContainer } from './style'
import { SignupForm } from '../../components/SignupForm'
import { Header } from '../../components/Header'

export const SignupPage = () => {
  return (
    <SignupContainer>
      <Header smallbutton='Voltar' />
      <SignupForm />
    </SignupContainer>
  )
}
