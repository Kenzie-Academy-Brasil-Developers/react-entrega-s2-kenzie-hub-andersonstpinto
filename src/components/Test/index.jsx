import { Container } from './styles'
import { TechCard } from '../TechCard'
import { Input } from '../Input'
import { Button } from '../Button'

export const Teste = () => {
  return (
    <Container>
      <TechCard />
      <TechCard />
      <Input />
      <Button />
      <Button color='primary' />
      <Button color='secondary' />
    </Container>
  )
}
