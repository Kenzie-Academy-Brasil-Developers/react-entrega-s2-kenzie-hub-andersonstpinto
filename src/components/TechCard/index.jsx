import { LiContainer } from './styles'

export const TechCard = ({ onClick, tech: { title, status } }) => {
  return (
    <LiContainer onClick={onClick}>
      <h3>{title}</h3>
      <span>{status}</span>
    </LiContainer>
  )
}
