import { ButtonSection, ModalContainer, ModalHead, ModalContent } from './style'
import { Input } from '../Input'
import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { SmallButton } from '../SmallButton'

export const EditTechModal = ({ onClick }) => {
  return (
    <ModalContainer>
      <ModalHead>
        <h3>Alterar Tecnologia</h3>
        <SmallButton onClick={onClick}>X</SmallButton>
      </ModalHead>
      <ModalContent>
        <Input type='text' placeholder='Typescript' label='Nome' />
        <CustomSelect
          array={['Iniciante', 'Intermediario', 'Avançado']}
          label='Status'
        />
        <ButtonSection>
          <Button color='primary' disabled>
            Salvar Alterações
          </Button>
          <Button color='secondary'>Excluir</Button>
        </ButtonSection>
      </ModalContent>
    </ModalContainer>
  )
}
