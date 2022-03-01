import { ButtonContainer } from './style'

export const Button = ({ color, disabled, onClick, children }) => {
  return (
    <>
      <ButtonContainer color={color} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonContainer>
    </>
  )
}
