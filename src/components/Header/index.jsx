import Logo from '../../assets/imgs/Logo.svg'
import { HeaderContainer } from './style'
import { SmallButton } from '../SmallButton'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt='KenzieHub' />
      <SmallButton onClick={() => console.log('path')}>Voltar</SmallButton>
    </HeaderContainer>
  )
}
