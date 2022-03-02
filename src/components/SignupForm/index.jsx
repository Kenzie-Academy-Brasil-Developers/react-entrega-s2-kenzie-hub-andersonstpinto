import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './style'

export const SignupForm = () => {
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
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = ({ passwordConfirm, ...rest }) => {
    console.log(rest)
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
