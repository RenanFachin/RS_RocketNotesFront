// Fazendo o import do fragment de dentro do react - import { Fragment } from 'react'
// Só é necessário este import caso se deseje utilizar <Frament> </Fragment> como caixa de conteúdo
// Se não quiser fazer o import, pode se utilizar desta propriedade usando apenas <> </>

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

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
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/");
  }

  // Função de deletar nota
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    // executando a função
    fetchNote()
  },[]);

  return (
    // Onde estará o conteúdo da interface
    // Fragment <> para agrupar os elementos
    <Container>
      <Header/>

{
  // Só mostrando se tem conteudo
  data &&
        <main>
          <Content>


          <ButtonText 
            title="Excluir a nota"
            onClick={handleRemove}
          />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
            // verificando se existe algo dentro
            data.links &&
              <Section title="Links úteis">
                <Links>
                {/* percorrendo se existir */}
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                  ))
                }
              </Links>
            </Section>
            }

            {
              data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag=>(
                  <Tag
                    key = {String(tag.id)}
                    title = {tag.name}
                  />
                ))
              }
            </Section>
            }
      
        <Button 
        title="Voltar" 
        onClick={handleBack}
        />
        </Content>
        </main>
}

    </Container>
  )
}

