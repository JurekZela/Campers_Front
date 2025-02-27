import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './GlobalStyled-styled.js'
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <GlobalStyled />
      </BrowserRouter>
  </StrictMode>,
)
