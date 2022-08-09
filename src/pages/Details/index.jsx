// Fazendo o import do fragment de dentro do react - import { Fragment } from 'react'
// Só é necessário este import caso se deseje utilizar <Frament> </Fragment> como caixa de conteúdo
// Se não quiser fazer o import, pode se utilizar desta propriedade usando apenas <> </>

// Fazendo o IMPORT do styled component
import { Container, Links, Content } from './styles'


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

        <main>
          <Content>


        <ButtonText title="Excluir a nota"/>

        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloremque, earum vero mollitia nulla exercitationem. Sequi atque id quasi odit quaerat tempora velit, quis doloremque dolores delectus expedita ab suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa dignissimos cum aspernatur pariatur totam tempora inventore esse iusto ex reprehenderit fugiat corporis excepturi nam, deleniti consectetur quibusdam voluptatum culpa.</p>

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
        </Content>
      </main>
    </Container>
  )
}

