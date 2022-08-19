import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme' // importando o theme criado
import GlobalStyle from './styles/global' // importando o globalstyles

import { AuthProvider } from './hooks/auth' // Importando o contexto criado

import { Routes } from './routes' // está buscando o index de dentro da pasta details
// {} para importação sem o default, precisa usar exatamente o mesmo nome dentro da função

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
