import { ModalContainer, ModalHead, ModalContent } from './style'
import { Input } from '../Input'
import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { SmallButton } from '../SmallButton'

export const NewTechModal = ({ onClick }) => {
  return (
    <ModalContainer>
      <ModalHead>
        <h3>Cadastrar Tecnologia</h3>
        <SmallButton onClick={onClick}>X</SmallButton>
      </ModalHead>
      <ModalContent>
        <Input type='text' placeholder='Typescript' label='Nome' />
        <CustomSelect
          array={['Iniciante', 'Intermediario', 'Avançado']}
          label='Status'
        />
        <Button color='primary'>Cadastrar Tecnologia</Button>
      </ModalContent>
    </ModalContainer>
  )
}
