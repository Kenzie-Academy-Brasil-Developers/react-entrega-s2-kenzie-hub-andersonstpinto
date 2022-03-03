import { LiContainer } from './styles'

export const TechCard = ({ setters, tech }) => {
  const { setCurrentTech, setEditTechModal } = setters
  const { title, status } = tech

  const handleClick = () => {
    setCurrentTech(tech)
    setEditTechModal(true)
  }

  return (
    <LiContainer onClick={() => handleClick()}>
      <h3>{title}</h3>
      <span>{status}</span>
    </LiContainer>
  )
}
