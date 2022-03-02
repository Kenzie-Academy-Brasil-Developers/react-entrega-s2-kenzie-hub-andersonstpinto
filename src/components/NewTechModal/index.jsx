import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import * as yup from 'yup'

import { ModalContainer, ModalHead, ModalContent } from './style'
import { CustomSelect } from '../CustomSelect'
import { SmallButton } from '../SmallButton'
import { Button } from '../Button'
import { Input } from '../Input'
import { useState } from 'react'

export const NewTechModal = ({ onClose }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem('@KenzieHub:token')) || ''
  )

  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required().default('Iniciante'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => {
    api
      .post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <ModalContainer onSubmit={handleSubmit(onSubmit)}>
      <ModalHead>
        <h3>Cadastrar Tecnologia</h3>
        <SmallButton onClick={onClose}>X</SmallButton>
      </ModalHead>
      <ModalContent>
        <Input
          type='text'
          placeholder='Typescript'
          label='Nome'
          register={register}
          name='title'
          error={errors.title?.message}
        />
        <CustomSelect
          array={['Iniciante', 'Intermediário', 'Avançado']}
          label='Status'
          register={register}
          name='status'
          error={errors.status?.message}
        />
        <Button color='primary' type='submit'>
          Cadastrar Tecnologia
        </Button>
      </ModalContent>
    </ModalContainer>
  )
}
