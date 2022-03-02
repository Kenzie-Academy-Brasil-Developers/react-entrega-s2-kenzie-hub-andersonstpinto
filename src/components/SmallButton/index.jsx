import { SmallButtonContainer } from './style'

export const SmallButton = ({ onClick, children }) => {
  return (
    <SmallButtonContainer onClick={onClick}>{children}</SmallButtonContainer>
  )
}
