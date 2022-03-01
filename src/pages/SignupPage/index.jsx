import { Container } from './style'
import { SignupForm } from '../../components/SignupForm'
import { Header } from '../../components/Header'
import { useHistory } from 'react-router-dom'

export const SignupPage = () => {
  const history = useHistory()
  return (
    <Container>
      <Header history={history} />
      <SignupForm />
    </Container>
  )
}
