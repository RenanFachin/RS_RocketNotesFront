import { Container, Brand, Menu, Search, Content, NewNote } from '../Home/styles'

import { Header } from '../../components/Header'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>

            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Container>
    )
}