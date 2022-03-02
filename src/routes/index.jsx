import { SignupPage } from '../pages/SignupPage'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Dashboard } from '../pages/Dashboard'
import { useEffect, useState } from 'react'

export const Routes = () => {
  const [auth, setAuth] = useState(false)
  const authState = { auth, setAuth }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
    if (token) return setAuth(true)
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage authState={authState} />
      </Route>
      <Route path='/signup'>
        <SignupPage authState={authState} />
      </Route>
      <Route path='/dashboard'>
        <Dashboard authState={authState} />
      </Route>
    </Switch>
  )
}
