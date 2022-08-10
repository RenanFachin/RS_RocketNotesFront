// Importando um ícone
import { FiPlus } from 'react-icons/fi' 

import { Container, Brand, Menu, Search, Content, NewNote } from '../Home/styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocket<span>Notes</span></h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus/> 
                Cria nota
            </NewNote>
        </Container>
    )
}