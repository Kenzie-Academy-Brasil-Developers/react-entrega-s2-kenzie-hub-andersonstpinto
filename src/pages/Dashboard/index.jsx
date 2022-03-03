import { Redirect } from 'react-router-dom'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { DashboardContainer } from './style'
import { UserCard } from '../../components/UserCard'
import { TechContainer } from '../../components/TechContainer'

export const Dashboard = ({ authState: { auth, setAuth } }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem('@KenzieHub:user')) || ''
  )

  if (!auth) return <Redirect to='/' />

  return (
    <DashboardContainer>
      <Header
        smallbutton='Sair'
        onClick={() => {
          setAuth(false)
          localStorage.clear()
        }}
      />
      <UserCard user={user} />
      <TechContainer user={user} />
    </DashboardContainer>
  )
}
