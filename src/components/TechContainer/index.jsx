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
            onClick={() => {
              setCurrentTech(tech)
              setEditTechModal(true)
            }}
          />
        ))}
      </ul>
      {newTechModal && <NewTechModal onClose={() => setNewTechModal(false)} />}
      {editTechModal && (
        <EditTechModal
          tech={currentTech}
          onClose={() => setEditTechModal(false)}
        />
      )}
    </TechUlContainer>
  )
}
