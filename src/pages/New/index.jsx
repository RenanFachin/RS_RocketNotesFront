import {useState} from "react"
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'

import {Link} from 'react-router-dom'

import {Container, Form} from './styles'


export function New(){

    // criando um estado para armazenar os links
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink(){
        // acessando o conteudo anterior armazenado no estado e montando um novo array com tudo que tinha antes + o item adicionado
        setLinks(prevState => [...prevState, newLink])
        setNewLink(""); // Resetando
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !==deleted));
    }

    return(
        <Container>
            <Header />

            <main>

                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        {
                            // percorrendo
                            links.map((link, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={link}
                                // Quando se tem parâmetro, se usa arrowfunction
                                onClick={()=>handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                        isNew 
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                    <div className="tags">
                    <NoteItem value="react"/>
                    <NoteItem isNew placeholder="Nova tag"/>
                    </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
                
            </main>
        </Container>
    )
}