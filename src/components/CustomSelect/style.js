import styled from 'styled-components'

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 105px;

  label {
    font-size: 12px;
    color: var(--gray-0);
  }

  select {
    font-size: 12px;
    color: var(--gray-1);
    padding: 10.5px 16px;
    width: 100%;
    border-radius: 3px;
    border: 2px solid var(--gray-2);
    background-color: var(--gray-2);

    option {
      padding: 10.5px 16px;
    }
  }

  span {
    font-size: 10px;
    color: var(--failure);
    margin-left: 16px;
  }
`
