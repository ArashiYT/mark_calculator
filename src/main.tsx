import ThemeProvider from './contexts/Theme'
import ReactDOM from 'react-dom/client'
import App from './components'
import "./styles/global.css"
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
