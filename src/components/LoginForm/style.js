import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 33px 17px;
  border-radius: 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  background-color: var(--gray-3);

  p {
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-1);
    font-weight: 600;
    margin: 34px 0 22px;
  }
`
