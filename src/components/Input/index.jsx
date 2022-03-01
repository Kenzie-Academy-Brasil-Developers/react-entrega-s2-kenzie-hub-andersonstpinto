import { InputContainer } from './styles'

export const Input = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input {...rest} />
      <span>Helper Text</span>
    </InputContainer>
  )
}
