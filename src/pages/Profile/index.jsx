import { useState } from "react";
import { Container, Form, Avatar }  from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import {useAuth} from '../../hooks/auth' // Importando o hook de autenticação para pegar as infos

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom"


export function Profile(){
    // Fazendo a importação de user e fazendo o uso das propriedades contidas nele
    const {user, updateProfile } = useAuth();
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);

    // as Password ficam vazias por motivos de segurança
    const [passwordOld,setPasswordOld] = useState();
    const [passwordNew,setPasswordNew] = useState();

    // Trocando avatar
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    // Função para update
    async function handleUpdate(){
        // primeiro criando um objeto user
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        };

        await updateProfile({ user, avatarFile });
    }

    function handleBack(){
        navigate(-1)
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        // toda vez que for modificado a imagem
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </header>

            <Form>
            <Avatar>
                <img src={avatar}
                alt="Foto do usuário" />


                <label htlmFor="avatar">
                    <FiCamera />

                    <input
                     id="avatar"
                     // mesmo id do html for
                     type="file"
                     onChange={handleChangeAvatar}
                    />
                </label>
            </Avatar>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e=> setName(e.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e=> setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e=> setPasswordOld(e.target.value)}

                />

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e=> setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

        </Container>
    )
}