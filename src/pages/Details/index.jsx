// Fazendo o import do fragment de dentro do react - import { Fragment } from 'react'
// Só é necessário este import caso se deseje utilizar <Frament> </Fragment> como caixa de conteúdo
// Se não quiser fazer o import, pode se utilizar desta propriedade usando apenas <> </>

// Fazendo o IMPORT do styled component
import { Container } from './styles'
 
// é necessário exportar a função (export)
export function Details(){

  return (
    // Onde estará o conteúdo da interface
    // Fragment <> para agrupar os elementos
    <Container>
    <h1>Hello world!</h1>
    <span>Renan</span>
    </Container>
  )
}

