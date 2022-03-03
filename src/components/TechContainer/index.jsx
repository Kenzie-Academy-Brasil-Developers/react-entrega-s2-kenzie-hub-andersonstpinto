import { SmallButton } from '../SmallButton'
import { TechUlContainer, TechUlTitle } from './style'
import { TechCard } from '../TechCard'
import { NewTechModal } from '../NewTechModal'
import { EditTechModal } from '../EditTechModal'
import { useState } from 'react'

export const TechContainer = ({ techs }) => {
  const [newTechModal, setNewTechModal] = useState(false)
  const [editTechModal, setEditTechModal] = useState(false)
  const [currentTech, setCurrentTech] = useState({})
  const [token] = useState(
    JSON.parse(localStorage.getItem('@KenzieHub:token')) || ''
  )

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
