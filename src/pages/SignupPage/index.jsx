import { SignupContainer } from './style'
import { SignupForm } from '../../components/SignupForm'
import { Header } from '../../components/Header'
import { Redirect, useHistory } from 'react-router-dom'

export const SignupPage = ({ authState: { auth } }) => {
  const history = useHistory()
  if (auth) return <Redirect to='/dashboard' />

  return (
    <SignupContainer>
      <Header smallbutton='Voltar' onClick={() => history.push('/')} />
      <SignupForm />
    </SignupContainer>
  )
}
