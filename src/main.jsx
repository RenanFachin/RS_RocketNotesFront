import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme' // importando o theme criado
import GlobalStyle from './styles/global' // importando o globalstyles


import { SignIn } from './pages/SignIn' // está buscando o index de dentro da pasta details
// {} para importação sem o default, precisa usar exatamente o mesmo nome dentro da função

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
)
