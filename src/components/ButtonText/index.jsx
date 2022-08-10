import { Container } from './style'

// isActive = false  -> para atribuir um valor padrão, caso não seja informado pela página
export function ButtonText({ title, isActive = false, ...rest }){
    return(
        <Container 
            type="button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>
    );
}