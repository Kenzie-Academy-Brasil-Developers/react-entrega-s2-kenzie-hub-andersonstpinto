import { LiContainer } from './styles'

export const TechCard = ({ onClick }) => {
  return (
    <LiContainer onClick={onClick}>
      <h3>Title Tech</h3>
      <span>Level</span>
    </LiContainer>
  )
}
