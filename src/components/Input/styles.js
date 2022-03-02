import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 105px;

  label {
    font-size: 12px;
    color: var(--gray-0);
  }

  input {
    padding: 10.5px 16px;
    border-radius: 4px;
    color: var(--gray-0);
    border: 2px solid var(--gray-2);
    background-color: var(--gray-2);
    transition: 0.1s all ease-in;

    ::placeholder {
      color: var(--gray-1);
    }

    :focus {
      border-color: var(--gray-1);
    }
  }

  span {
    font-size: 10px;
    color: var(--failure);
    margin-left: 16px;
  }
`
