// Fazendo o import do fragment de dentro do react - import { Fragment } from 'react'
// Só é necessário este import caso se deseje utilizar <Frament> </Fragment> como caixa de conteúdo
// Se não quiser fazer o import, pode se utilizar desta propriedade usando apenas <> </>

// Fazendo o IMPORT do styled component
import { Container, Links } from './styles'


// Fazendo o IMPORT do component HEADER
import { Header } from '../../components/Header'
// Fazendo o IMPORT do component (estilização padrão para os botões) Button
import { Button } from '../../components/Button'
// Fazendo o IMPORT do component SECTION
import { Section } from '../../components/Section'
// Fazendo o IMPORT do component TAG
import { Tag } from '../../components/Tag'
// Fazendo o IMPORT do component BUTTONTEXT
import { ButtonText } from '../../components/ButtonText'


// é necessário exportar a função (export)
export function Details(){

  return (
    // Onde estará o conteúdo da interface
    // Fragment <> para agrupar os elementos
    <Container>
      <Header/>

      <ButtonText title="Excluir a nota"/>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rockeseat.com.br</a></li>
          <li><a href="#">https://www.rockeseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title = "express"></Tag>
        <Tag title = "nodejs"></Tag>
      </Section>

      
      <Button title="Voltar" />
    </Container>
  )
}

