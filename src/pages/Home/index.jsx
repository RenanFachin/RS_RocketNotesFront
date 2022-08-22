// Importando um ícone
import { FiPlus, FiSearch } from 'react-icons/fi' 
import { useState, useEffect } from 'react'

import { Container, Brand, Menu, Search, Content, NewNote } from '../Home/styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function Home(){
    const [tags, setTags] = useState([]);



    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags()
    },[])

    return(
        <Container>
            <Brand>
                <h1>Rocket<span>Notes</span></h1>
            </Brand>

            <Header/>

            <Menu>
            <li>
                <ButtonText
                title="Todos"
                isActive
                />
            </li>
                {
                    // Verificando se existe tags
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}><ButtonText title={tag.name} /></li>
                ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={ {
                        title: 'React',
                        tags:[
                            {id: '1', name: 'react' },
                            {id: '2', name: 'rocketseat' },
                        ] 
                    }}
                    />
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus/> 
                Cria nota
            </NewNote>
        </Container>
    )
}