import S from "./Styles.module.scss"

const BookCard = ({image, title, autor, genre}) => {
    return (
        <div className={S.card}>
            <img src={image} alt="" />
            <div>
                <h3>Titulo</h3>
                <p>{title}</p>
                <h3>Autor</h3>
                <p>{autor}</p>
                <h3>Gênero</h3>
                <p>{genre}</p>
            </div>
        </div>
    )
}

export default BookCard