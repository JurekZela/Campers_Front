import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '/src/redux/store.js';
import App from './components/App/App.jsx'
import GlobalStyled from './GlobalStyled-styled.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyled />
      </BrowserRouter>
    </Provider>
  // </StrictMode>,
)
