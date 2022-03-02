import { Select } from './style'

export const CustomSelect = ({ label, error, name, register, array }) => {
  return (
    <Select>
      <label>
        {label}
        {!!error && <span>{error}</span>}
      </label>
      <select {...register(name)}>
        {array.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Select>
  )
}
