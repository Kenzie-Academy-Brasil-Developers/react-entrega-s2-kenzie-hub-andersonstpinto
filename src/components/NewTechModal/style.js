import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: var(--gray-3);
  position: absolute;
  top: 10px;
  left: 0;

  section {
    padding: 10px 16px;
  }

  section:last-of-type {
    padding-bottom: 26px;
  }
`

export const ModalHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 4px 0 0;
  background-color: var(--gray-2);

  h3 {
    font-size: 12px;
    line-height: 19px;
    font-weight: 700;
    color: var(--gray-0);
  }

  button {
    color: var(--gray-0);
    border-color: var(--gray-2);
    background-color: var(--gray-2);

    :hover {
      border-color: var(--gray-3);
      background-color: var(--gray-3);
    }
  }
`
