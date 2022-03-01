import { Select } from './style'

export const CustomSelect = ({ label, array }) => {
  return (
    <Select>
      <label>{label}</label>
      <select>
        {array.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <span>Helper Text</span>
    </Select>
  )
}
