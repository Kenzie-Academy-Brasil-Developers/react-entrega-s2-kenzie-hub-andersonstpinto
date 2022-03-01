import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  color: #ffffff;
  width: 100%;
  padding: 10px 22px;
  border-radius: 4px;
  border: 1px solid;
  ${props =>
    props.disabled
      ? `
          background-color: #59323f;
          border-color: #59323f;
        `
      : props.color === 'primary'
      ? `
          background-color: #ff577f;
          border-color: #ff577f;
        `
      : `
          background-color: #868e96;
          border-color: #868e96;
        `}

  :hover {
  ${props =>
    props.disabled
      ? `cursor: not-allowed;`
      : props.color === 'primary'
      ? `
          background-color: #ff427f;
          border-color: #ff427f;
        `
      : `
          background-color: #343b41;
          border-color: #343b41;
        `}
`
