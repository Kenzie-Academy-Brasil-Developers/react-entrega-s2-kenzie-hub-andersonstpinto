import { SignupPage } from '../pages/SignupPage'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/signup'>
        <SignupPage />
      </Route>
    </Switch>
  )
}
