import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import * as yup from 'yup'

import { ButtonSection, ModalContainer, ModalHead, ModalContent } from './style'
import { CustomSelect } from '../CustomSelect'
import { SmallButton } from '../SmallButton'
import { Button } from '../Button'
import { Input } from '../Input'

export const EditTechModal = ({ tech, onClose }) => {
  const { title, status, id } = tech
  const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))

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

  const editTech = ({ name, ...rest }) => {
    api
      .put(`/users/techs/${id}`, rest, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteTech = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <ModalContainer onSubmit={handleSubmit(editTech)}>
      <ModalHead>
        <h3>Alterar Tecnologia</h3>
        <SmallButton type='button' onClick={onClose}>
          X
        </SmallButton>
      </ModalHead>
      <ModalContent>
        <Input
          type='text'
          placeholder={title}
          label='Nome'
          register={register}
          name='name'
          error={errors.name?.message}
          disabled
        />
        <CustomSelect
          array={['Iniciante', 'Intermediário', 'Avançado']}
          selected={status}
          label='Status'
          name='status'
          register={register}
          error={errors.status?.message}
        />
        <ButtonSection>
          <Button color='primary' type='submit' disabled={!!errors.status}>
            Salvar Alterações
          </Button>
          <Button
            color='secondary'
            type='button'
            onClick={() => deleteTech(id)}
          >
            Excluir
          </Button>
        </ButtonSection>
      </ModalContent>
    </ModalContainer>
  )
}
