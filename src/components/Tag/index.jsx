import { Container } from './style';

// Passada a propriedade title para tag para que cada tag tenha seu próprio title
export function Tag({ title }){
    return(
        <Container>
            {title}
        </Container>
    )
}