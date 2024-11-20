import S from './Styles.module.scss'
import FormBook from "../../components/form/FormBook"

const Doacoes = () => {
    return (
        <section className={S.container}>
            <p className={S.paragrafo}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <FormBook />
        </section>
    )
}

export default Doacoes