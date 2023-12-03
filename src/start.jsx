// Import React dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import main react file
import App from './App.jsx'

// Manipulate the Virtual DOM & render it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
