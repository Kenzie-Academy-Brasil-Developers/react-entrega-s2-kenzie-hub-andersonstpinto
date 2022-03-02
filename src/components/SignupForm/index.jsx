import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { CustomSelect } from '../CustomSelect'
import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './style'

export const SignupForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required(),
    select: yup.string().required().default('Primeiro Módulo'),
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => console.log(data)

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
          array={[
            'Primeiro Módulo',
            'Segundo Módulo',
            'Terceiro Módulo',
            'Quarto Módulo',
            'Quinto Módulo',
            'Sexto Módulo',
          ]}
          register={register}
          name='select'
          error={errors.select?.message}
          onChange={e =>
            setValue('select', e.target.value, { shouldValidate: true })
          } // Using setValue
        />
        <Button color='primary' type='submit'>
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
