import { Container } from './styles'


export function Button({title, loading = false, ...rest}){
    // props ou ({name}), o que muda é que para chamar será feito apenas com o {name}
    return(
    <Container 
        type="button"
        disabled={loading} // se o loading for true, ele vai desabilitar o botão
        {...rest}
        >
        { loading ? 'Carregando...' : title }
    </Container>
    )
}