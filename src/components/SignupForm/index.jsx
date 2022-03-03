import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './style'

export const SignupForm = () => {
  const history = useHistory()
  const courseModules = [
    'Primeiro módulo (Introdução ao Frontend)',
    'Segundo módulo (Frontend Avançado)',
    'Terceiro módulo (Introdução ao Backend)',
    'Quarto módulo (Backend Avançado)',
  ]

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required(),
    course_module: yup.string().required().default('Primeiro Módulo'),
    bio: yup.string().max(24).required(),
    contact: yup
      .string()
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        'Deve ser um número de celular válido, incluindo DDD'
      )
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = ({ passwordConfirm, ...rest }) => {
    api
      .post('/users', rest)
      .then(_ => {
        toast.success('Sucesso! Agora faça login.')
        return history.push('/')
      })
      .catch(err => {
        toast.error('Ops! Algo deu errado.')
        console.log(err)
      })
  }

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Crie sua conta</h3>
        <p>Rápido e grátis, vamos nessa</p>
        <Input
          label='Nome'
          type='text'
          placeholder='Digite aqui seu nome'
          register={register}
          name='name'
          error={errors.name?.message}
        />
        <Input
          label='Email'
          type='text'
          placeholder='Digite aqui seu email'
          register={register}
          name='email'
          error={errors.email?.message}
        />
        <Input
          label='Bio'
          type='text'
          placeholder='Digite aqui sua bio'
          register={register}
          name='bio'
          error={errors.bio?.message}
        />
        <Input
          label='Telefone'
          type='text'
          placeholder='Digite aqui seu celular'
          register={register}
          name='contact'
          error={errors.contact?.message}
        />
        <Input
          label='Senha'
          type='password'
          placeholder='Digite aqui sua senha'
          register={register}
          name='password'
          error={errors.password?.message}
        />
        <Input
          label='Confirmar Senha'
          type='password'
          placeholder='Digite novamente sua senha'
          register={register}
          name='passwordConfirm'
          error={errors.passwordConfirm?.message}
        />
        <CustomSelect
          label='Selecionar módulo'
          array={courseModules}
          register={register}
          name='course_module'
          error={errors.course_module?.message}
        />
        <Button color='primary' type='submit'>
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
