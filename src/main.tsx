import ThemeProvider from './contexts/Theme'
import ModalProvider from './contexts/Modal'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./libs/store"
import App from './components'
import "./styles/global.css"
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
