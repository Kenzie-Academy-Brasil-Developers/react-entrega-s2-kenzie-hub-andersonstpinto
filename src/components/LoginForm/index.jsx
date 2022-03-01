import { useHistory } from 'react-router-dom'
import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './style'

export const LoginForm = () => {
  const history = useHistory()

  return (
    <>
      <Form onSubmit={e => e.preventDefault()}>
        <h3>Login</h3>
        <Input label='Email' type='email' placeholder={'Email'} />
        <Input label='Senha' type='password' placeholder={'Senha'} />
        <Button color='primary' onClick={() => console.log('login')}>
          Entrar
        </Button>
        <p>Ainda não possui uma conta?</p>
        <Button color='secondary' onClick={() => history.push('/signup')}>
          Cadastre-se
        </Button>
      </Form>
    </>
  )
}
