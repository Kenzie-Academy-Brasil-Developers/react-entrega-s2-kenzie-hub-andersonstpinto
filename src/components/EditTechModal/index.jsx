import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ButtonSection, ModalContainer, ModalHead, ModalContent } from './style'
import { CustomSelect } from '../CustomSelect'
import { SmallButton } from '../SmallButton'
import { Button } from '../Button'
import { Input } from '../Input'

export const EditTechModal = ({ onClick }) => {
  const schema = yup.object().shape({
    status: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = ({ name, ...rest }) => console.log(rest)

  return (
    <ModalContainer onSubmit={handleSubmit(onSubmit)}>
      <ModalHead>
        <h3>Alterar Tecnologia</h3>
        <SmallButton onClick={onClick}>X</SmallButton>
      </ModalHead>
      <ModalContent>
        <Input
          type='text'
          placeholder='Typescript'
          label='Nome'
          register={register}
          name='name'
          error={errors.name?.message}
          disabled
        />
        <CustomSelect
          array={['Iniciante', 'Intermediário', 'Avançado']}
          label='Status'
          name='status'
          register={register}
          error={errors.status?.message}
        />
        <ButtonSection>
          <Button color='primary' type='submit' disabled={!!errors.status}>
            Salvar Alterações
          </Button>
          <Button color='secondary'>Excluir</Button>
        </ButtonSection>
      </ModalContent>
    </ModalContainer>
  )
}
