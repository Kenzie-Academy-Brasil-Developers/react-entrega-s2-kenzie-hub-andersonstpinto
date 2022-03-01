import { SmallButton } from '../SmallButton'
import { Container } from './style'
import { TechCard } from '../TechCard'

export const TechContainer = () => {
  return (
    <Container>
      <section>
        <h2>Tecnologias</h2>
        <SmallButton>+</SmallButton>
      </section>
      <ul>
        {['teste', 'teste2', 't3', 't4', 't5', 't6'].map((tech, idx) => (
          <TechCard key={idx}>{tech}</TechCard>
        ))}
      </ul>
    </Container>
  )
}
