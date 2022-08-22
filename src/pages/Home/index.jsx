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
    const [tagsSelected, setTagsSelected] = useState([]);

    function handleTagsSelected(tagName){
        // Sabendo se a tag já está selecionada
        // verificando com o .includes se a tagName selecionada já existe dentro da lista de tags
        const alreadySelected = tagsSelected.includes(tagName)
        // Clicando numa tag já selecionada o seu retorno TRUE
        // Clicando numa tag não selecionada, vai retornar FALSE

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag != tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }

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
                onClick={() => handleTagsSelected("all")}
                isActive={tagsSelected.length === 0}
                />
            </li>
                {
                    // Verificando se existe tags
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                            title={tag.name} 
                            onClick={() => handleTagsSelected(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                            />
                            </li>
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