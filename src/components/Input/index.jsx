import { InputContainer } from './styles'

export const Input = ({ label, error, register, name, ...rest }) => {
  return (
    <InputContainer>
      <label>
        {label}
        {!!error && <span>{error}</span>}
      </label>
      <input {...register(name)} {...rest} />
    </InputContainer>
  )
}
