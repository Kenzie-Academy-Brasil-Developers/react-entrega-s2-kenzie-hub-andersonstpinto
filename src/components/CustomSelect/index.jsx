import { Select } from './style'

export const CustomSelect = ({ label, error, onChange, array }) => {
  return (
    <Select>
      <label>
        {label}
        {!!error && <span>{error}</span>}
      </label>
      <select onChange={onChange}>
        {array.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Select>
  )
}
