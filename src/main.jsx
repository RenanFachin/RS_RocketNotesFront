import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/Details' 
// {} para importação sem o default, precisa usar exatamente o mesmo nome dentro da função

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
)
