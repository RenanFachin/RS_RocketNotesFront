import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/Details' // está buscando o index de dentro da pasta details
// {} para importação sem o default, precisa usar exatamente o mesmo nome dentro da função

import { ThemeProvider } from 'styled-components'
import theme from '.styles/theme' // importando o theme criado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
