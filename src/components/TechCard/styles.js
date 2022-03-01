import styled from 'styled-components'

export const LiContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: var(--gray-4);
  transition: 0.2s all ease-out;
  cursor: pointer;

  h3 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: var(--gray-0);
  }

  span {
    font-size: 12px;
    line-height: 22px;
    font-weight: 400;
    color: var(--gray-1);
  }

  :hover {
    background-color: var(--gray-2);

    span {
      color: var(--gray-0);
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }
`
