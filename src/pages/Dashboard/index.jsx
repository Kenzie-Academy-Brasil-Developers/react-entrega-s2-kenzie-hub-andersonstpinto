import { Header } from '../../components/Header'
import { DashboardContainer } from './style'
import { UserCard } from '../../components/UserCard'
import { TechContainer } from '../../components/TechContainer'

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <UserCard />
      <TechContainer />
    </DashboardContainer>
  )
}
