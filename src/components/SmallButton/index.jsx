import { Container } from './style'

export const SmallButton = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>
}
