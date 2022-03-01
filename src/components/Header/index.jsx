import Logo from '../../assets/imgs/Logo.svg'
import { Container } from './style'
import { SmallButton } from '../SmallButton'

export const Header = ({ history }) => {
  return (
    <Container>
      <img src={Logo} alt='KenzieHub' />
      <SmallButton onClick={() => history.push('/')}>Voltar</SmallButton>
    </Container>
  )
}
