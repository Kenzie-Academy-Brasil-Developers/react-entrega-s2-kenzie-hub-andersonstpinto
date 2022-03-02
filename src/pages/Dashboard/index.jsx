import { Header } from '../../components/Header'
import { DashboardContainer } from './style'
import { UserCard } from '../../components/UserCard'
import { TechContainer } from '../../components/TechContainer'
import { Redirect } from 'react-router-dom'

export const Dashboard = ({ authState: { auth, setAuth } }) => {
  console.log(auth)
  if (!auth) return <Redirect to='/' />

  return (
    <DashboardContainer>
      <Header
        smallbutton='Sair'
        onClick={() => {
          localStorage.clear()
          setAuth(false)
        }}
      />
      <UserCard />
      <TechContainer />
    </DashboardContainer>
  )
}
