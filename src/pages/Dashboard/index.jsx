import { Header } from '../../components/Header'
import { Container } from './style'
import { UserCard } from '../../components/UserCard'
import { TechContainer } from '../../components/TechContainer'

export const Dashboard = () => {
  return (
    <Container>
      <Header />
      <UserCard />
      <TechContainer />
    </Container>
  )
}
