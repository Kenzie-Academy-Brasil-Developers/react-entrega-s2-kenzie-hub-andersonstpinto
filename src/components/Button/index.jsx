import { ButtonContainer } from './style'

export const Button = ({ color, disabled, onClick, children, ...rest }) => {
  return (
    <>
      <ButtonContainer
        color={color}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </ButtonContainer>
    </>
  )
}
