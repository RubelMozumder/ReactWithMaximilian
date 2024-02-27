import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { BrowserRouter as Router } from 'react-router-dom'

// Way 3: The React.createElement(App) follows the pattern of JS
// to create the DOM root that can be read browser do not need any build process
// what is really needed by JSX
// Therefore React.createElement(App) is valid aulternative to JSX (<App />)
// const entryPoint = document.getElementById('root')
// ReactDOM.createRoot(entryPoint).render(React.createElement(App))   

// Way 2
// const entryPoint = document.getElementById('root')
// ReactDOM.createRoot(entryPoint).render(<App />)

// Way 1
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

