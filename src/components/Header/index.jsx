import Logo from '../../assets/imgs/Logo.svg'
import { Container } from './style'
import { SmallButton } from '../SmallButton'

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt='KenzieHub' />
      <SmallButton onClick={() => console.log('path')}>Voltar</SmallButton>
    </Container>
  )
}
