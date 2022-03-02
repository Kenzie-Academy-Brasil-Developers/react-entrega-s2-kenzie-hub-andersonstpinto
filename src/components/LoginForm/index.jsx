import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import * as yup from 'yup'

import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './style'

export const LoginForm = ({ setAuth }) => {
  const history = useHistory()

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = loginData => {
    console.log(loginData)
    api
      .post('/sessions', loginData)
      .then(({ data }) => {
        console.log(data)
        setAuth(true)
        //toast
        localStorage.setItem('@KenzieHub:token', JSON.stringify(data.token))
        localStorage.setItem('@KenzieHub:user', JSON.stringify(data.user))
        history.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
        //toast
      })
  }

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <Input
          label='Email'
          type='text'
          placeholder={'Email'}
          register={register}
          name='email'
          error={errors.email?.message}
        />
        <Input
          label='Senha'
          type='password'
          placeholder={'Senha'}
          register={register}
          name='password'
          error={errors.password?.message}
        />
        <Button type='submit' color='primary'>
          Entrar
        </Button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Button color='secondary' onClick={() => history.push('/signup')}>
        Cadastre-se
      </Button>
    </Form>
  )
}
