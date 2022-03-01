import { SignupPage } from '../pages/SignupPage'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Dashboard } from '../pages/Dashboard'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/signup'>
        <SignupPage />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
  )
}
