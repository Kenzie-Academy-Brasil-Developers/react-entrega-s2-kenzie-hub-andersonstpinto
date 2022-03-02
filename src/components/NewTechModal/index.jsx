import { ModalContainer, ModalHead } from './style'
import { Input } from '../Input'
import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { SmallButton } from '../SmallButton'

export const NewTechModal = () => {
  return (
    <ModalContainer>
      <ModalHead>
        <h3>Cadastrar tecnologia</h3>
        <SmallButton>X</SmallButton>
      </ModalHead>
      <section>
        <Input type='text' placeholder='Typescript' label='Nome' />
        <CustomSelect array={['Iniciante', 'Intermediario', 'Avançado']} />
        <Button color='primary'>Cadastrar Tecnologia</Button>
      </section>
    </ModalContainer>
  )
}
