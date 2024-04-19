import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const persons = [
  {
    name: 'Arto Hellas',
    number: 40-123456
  },
  {
    name: 'Ada Lovelace',
    number: 39-44-5323523
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
)