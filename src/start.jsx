// Import React dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import Boootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import main react file
import App from './App.jsx'

// Manipulate the Virtual DOM & render it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
