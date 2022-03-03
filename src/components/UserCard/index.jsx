import { UserContainer } from './style'

export const UserCard = ({ user: { name, course_module } }) => (
  <UserContainer>
    <h1>Olá, {name}</h1>
    <p>{course_module}</p>
  </UserContainer>
)
