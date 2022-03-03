import { SmallButton } from '../SmallButton'
import { TechUlContainer, TechUlTitle } from './style'
import { TechCard } from '../TechCard'
import { NewTechModal } from '../NewTechModal'
import { EditTechModal } from '../EditTechModal'
import { useState, useEffect } from 'react'
import api from '../../services/api'

export const TechContainer = ({ user }) => {
  const [techs, setTechs] = useState([])
  const [newTechModal, setNewTechModal] = useState(false)
  const [editTechModal, setEditTechModal] = useState(false)
  const [currentTech, setCurrentTech] = useState({})
  const [token] = useState(
    JSON.parse(localStorage.getItem('@KenzieHub:token')) || ''
  )

  useEffect(() => {
    if (user) {
      api
        .get(`/users/${user.id}`)
        .then(({ data }) => {
          setTechs(data.techs)
        })
        .catch(err => console.log(err))
    }
  }, [newTechModal, editTechModal]) // Isso é gambiarra?

  return (
    <TechUlContainer>
      <TechUlTitle>
        <h2>Tecnologias</h2>
        <SmallButton onClick={() => setNewTechModal(true)}>+</SmallButton>
      </TechUlTitle>
      <ul>
        {techs.map(tech => (
          <TechCard
            key={tech.id}
            tech={tech}
            setters={{
              setCurrentTech,
              setEditTechModal,
            }}
          />
        ))}
      </ul>
      {newTechModal && (
        <NewTechModal token={token} setState={setNewTechModal} />
      )}
      {editTechModal && (
        <EditTechModal
          token={token}
          tech={currentTech}
          setState={setEditTechModal}
        />
      )}
    </TechUlContainer>
  )
}
