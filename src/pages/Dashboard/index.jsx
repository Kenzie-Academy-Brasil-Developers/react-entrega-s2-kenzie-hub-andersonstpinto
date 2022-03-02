import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'

import { Header } from '../../components/Header'
import { DashboardContainer } from './style'
import { UserCard } from '../../components/UserCard'
import { TechContainer } from '../../components/TechContainer'

export const Dashboard = ({ authState: { auth, setAuth } }) => {
  const [techs, setTechs] = useState([])
  const user = JSON.parse(localStorage.getItem('@KenzieHub:user'))

  useEffect(() => {
    if (user) {
      api
        .get(`/users/${user.id}`)
        .then(({ data }) => {
          setTechs(data.techs)
        })
        .catch(err => console.log(err))
    }
  }, [user])

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
      <UserCard />
      <TechContainer techs={techs} />
    </DashboardContainer>
  )
}
