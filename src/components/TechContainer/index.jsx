import { SmallButton } from '../SmallButton'
import { TechUlContainer, TechUlTitle } from './style'
import { TechCard } from '../TechCard'
import { NewTechModal } from '../../components/NewTechModal'

export const TechContainer = () => {
  return (
    <TechUlContainer>
      <TechUlTitle>
        <h2>Tecnologias</h2>
        <SmallButton>+</SmallButton>
      </TechUlTitle>
      <ul>
        {['teste', 'teste2', 't3', 't4', 't5', 't6'].map((tech, idx) => (
          <TechCard key={idx}>{tech}</TechCard>
        ))}
      </ul>
      <NewTechModal />
    </TechUlContainer>
  )
}
