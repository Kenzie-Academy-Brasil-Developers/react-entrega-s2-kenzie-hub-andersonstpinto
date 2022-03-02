import { SmallButton } from '../SmallButton'
import { TechUlContainer, TechUlTitle } from './style'
import { TechCard } from '../TechCard'
import { NewTechModal } from '../NewTechModal'
import { EditTechModal } from '../EditTechModal'
import { useState } from 'react'

export const TechContainer = ({ techs }) => {
  const [newTechModal, setNewTechModal] = useState(false)
  const [editTechModal, setEditTechModal] = useState(false)

  return (
    <TechUlContainer>
      <TechUlTitle>
        <h2>Tecnologias</h2>
        <SmallButton onClick={() => setNewTechModal(true)}>+</SmallButton>
      </TechUlTitle>
      <ul>
        {techs.map((tech, idx) => (
          <TechCard key={idx} onClick={() => setEditTechModal(true)}>
            {tech}
          </TechCard>
        ))}
      </ul>
      {newTechModal && <NewTechModal onClick={() => setNewTechModal(false)} />}
      {editTechModal && (
        <EditTechModal onClick={() => setEditTechModal(false)} />
      )}
    </TechUlContainer>
  )
}
