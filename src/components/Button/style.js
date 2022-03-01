import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  color: #ffffff;
  width: 135px;
  padding: 10px 22px;
  border-radius: 4px;
  border: 1px solid;
  ${props => {
    switch (props.color) {
      case 'primary':
        return `background-color: #ff577f;
        border-color: #ff577f;
      `
      case 'secondary':
        return `
          background-color: #868e96;
          border-color: #868e96;
        `
      default:
        return `
          background-color: #59323f;
          border-color: #59323f;
        `
    }
  }}

  :hover {
  ${props => {
    switch (props.color) {
      case 'primary':
        return `background-color: #ff427f;
        border-color: #ff427f;
      `
      case 'secondary':
        return `
          background-color: #343b41;
          border-color: #343b41;
        `
      default:
        return 'cursor: not-allowed;'
    }
  }}
`
