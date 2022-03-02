import Logo from '../../assets/imgs/Logo.svg'
import { HeaderContainer } from './style'
import { SmallButton } from '../SmallButton'

export const Header = ({ smallbutton }) => {
  return (
    <HeaderContainer>
      <img src={Logo} alt='KenzieHub' />
      <SmallButton onClick={() => console.log('path')}>
        {smallbutton}
      </SmallButton>
    </HeaderContainer>
  )
}
