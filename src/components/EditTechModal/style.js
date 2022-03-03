import styled from 'styled-components'

export const ModalContainer = styled.form`
  width: 100%;
  border-radius: 4px;
  background-color: var(--gray-3);
  position: absolute;
  top: -45px;
  left: 0;
  box-shadow: 0 0 1000px 1000px rgba(0, 0, 0, 0.5);
`

export const ModalHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2px 10px 16px;
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
  }
`

export const ModalContent = styled.section`
  padding: 10px 16px 26px;
`

export const ButtonSection = styled.section`
  display: flex;
  justify-content: space-between;

  button {
    height: fit-content;
  }

  button:first-of-type {
    width: 62%;
  }

  button:last-of-type {
    width: 30%;
  }
`
