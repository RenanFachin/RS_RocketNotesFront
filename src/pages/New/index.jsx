import {useState} from "react"
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'

import {Link} from 'react-router-dom'

import {Container, Form} from './styles'

import { api } from '../../services/api'
import { useNavigate } from "react-router-dom"


export function New(){
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")

    // criando um estado para armazenar os links
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    // criando um estado para armazenar os links
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate()

    function handleAddLink(){
        // acessando o conteudo anterior armazenado no estado e montando um novo array com tudo que tinha antes + o item adicionado
        setLinks(prevState => [...prevState, newLink])
        setNewLink(""); // Resetando
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !==deleted));
    }

    function handleAddTag(){
        setTags(prevState => [...prevState,newTag]);

        setNewTag("")
        // (prev state => [...prevState, newTag])
        // ["react", "nodejs"] => ["react", "nodejs", "novaTag" ]
        //
    }

    function handleRemoveTag(deleted){
        // Trás todas as tags menos a deletada e retorna uma novo objeto
        setTags(prevState => prevState.filter(tag => tag !==deleted));
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("Nota cadastrada com sucesso!!")
        navigate("/") // levando o usuário para a home após cadastrar
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

                    <Input 
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

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

                        {
                            tags.map((tag,index) => (
                                <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={()=>{handleRemoveTag(tag)}}
                                />
                            ))
                        }

                    <NoteItem 
                    isNew 
                    placeholder="Nova tag"
                    onChange= {e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                    />
                    </div>
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
                
            </main>
        </Container>
    )
}