import Logo from '../../assets/imgs/Logo.svg'
import { HeaderContainer } from './style'
import { SmallButton } from '../SmallButton'

export const Header = ({ smallbutton, onClick }) => {
  return (
    <HeaderContainer>
      <img src={Logo} alt='KenzieHub' />
      <SmallButton onClick={onClick}>{smallbutton}</SmallButton>
    </HeaderContainer>
  )
}
