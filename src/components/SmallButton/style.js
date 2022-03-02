import styled from 'styled-components'

export const SmallButtonContainer = styled.button`
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid var(--gray-3);
  background-color: var(--gray-3);
  transition: 0.1s all ease-in;

  :hover {
    border-color: var(--gray-2);
    background-color: var(--gray-2);
  }
`
