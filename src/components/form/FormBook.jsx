import S from "./Styles.module.scss"
import { IoBookOutline } from "react-icons/io5";


const FormBook = ({image, title, autor, genre}) => {
    return (
        <div className={S.card}>
            <div className={S.card_header}>
                <IoBookOutline className={S.icon} />
                <p>Informações do Livro</p>
            </div>
            <form action="#">
                <input 
                    type="text"
                    placeholder="Titulo "
                
                />
                <input 
                    type="text"
                    placeholder="Categoria"
                
                />
                <input 
                    type="text"
                    placeholder="Autor"
                
                />
                <input 
                    type="text"
                    placeholder="Link da Imagem"
                
                />
                <button>Doar</button>
            </form>
            
        </div>
    )
}

export default FormBook