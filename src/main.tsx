import ThemeProvider from './contexts/Theme'
import ModalProvider from './contexts/Modal'
import BoxProvider from './contexts/Box'
import AppComponent from './components'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./libs/store"
import "./styles/global.css"
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <BoxProvider>
            <AppComponent />
          </BoxProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
