import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/Details' // está buscando o index de dentro da pasta details
// {} para importação sem o default, precisa usar exatamente o mesmo nome dentro da função

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme' // importando o theme criado
import GlobalStyle from './styles/global' // importando o globalstyles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
