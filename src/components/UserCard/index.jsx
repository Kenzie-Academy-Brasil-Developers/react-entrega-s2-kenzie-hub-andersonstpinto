import { UserContainer } from './style'

export const UserCard = () => {
  const user = JSON.parse(localStorage.getItem('@KenzieHub:user'))

  return (
    <UserContainer>
      <h1>Olá, {user.name}</h1>
      <p>{user.course_module}</p>
    </UserContainer>
  )
}
