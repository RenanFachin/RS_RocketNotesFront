import { FiPlus, FiX} from 'react-icons/Fi' // Importando ícones de uma biblioteca externa

import { Container } from './styles' // Importando o componente criado pelo styles


//inNew={isNew} -> Atribuindo esta propriedade para o Container que será criado dentro de styles
export function NoteItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest}/>


            <button 
            type="button"
            onClick={onClick}
            // Aplicando uma classe de maneira condicional
            className={isNew ? `button-add` : `button-delete`}
            >
                {isNew ? <FiPlus/> : <FiX/>}
                {/* se isNew for true mostra o FiPlus. se for false, irá mostrar o FiX */}

            </button>

        </Container>
    )
}


// readOnly={!isNew}, se não é novo = pode bloquear