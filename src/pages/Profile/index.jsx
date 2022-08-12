import { Container, Form, Avatar }  from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>

            <Form>
            <Avatar>
                <img src="https://github.com/RenanFachin.png"
                alt="Foto do usuário" />


                <label htlmFor="avatar">
                    <FiCamera />

                    <input
                     id="avatar"
                     // mesmo id do html for
                     type="file"
                    />
                </label>
            </Avatar>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Salvar" />

            </Form>

        </Container>
    )
}