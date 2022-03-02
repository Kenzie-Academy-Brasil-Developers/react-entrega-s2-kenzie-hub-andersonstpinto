import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// Build API requests
// Log bad requests and treat them later
// Signup form just needs to connect to API
// Signup redirect
// Login POST request
// Dashboard locked
// Mind the token/localstorage usage
// LocalStorage for the user infos as well
// Implement Toats for success/failures
