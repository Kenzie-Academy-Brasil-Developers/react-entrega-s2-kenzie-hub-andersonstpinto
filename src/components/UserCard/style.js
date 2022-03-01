import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 129px;
  padding: 0 13px;
  border: 1px solid var(--gray-3);
  border-width: 1px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: var(--gray-0);
  }

  p {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: var(--gray-1);
  }
`
