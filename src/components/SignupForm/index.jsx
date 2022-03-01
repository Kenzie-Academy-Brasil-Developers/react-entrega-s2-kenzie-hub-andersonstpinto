import { Button } from '../Button'
import { Form } from './style'
import { Input } from '../Input'
import { CustomSelect } from '../CustomSelect'

export const SignupForm = () => {
  return (
    <Form>
      <h3>Crie sua conta</h3>
      <p>Rápido e grátis, vamos nessa</p>
      <Input label='Nome' type='text' placeholder='Digite aqui seu nome' />
      <Input label='Email' type='email' placeholder='Digite aqui seu email' />
      <Input
        label='Senha'
        type='password'
        placeholder='Digite aqui sua senha'
      />
      <Input
        label='Confirmar Senha'
        type='password'
        placeholder='Digite novamente sua senha'
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
      />
      <Button disabled>Cadastrar</Button>
    </Form>
  )
}
