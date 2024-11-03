import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import store from './store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
