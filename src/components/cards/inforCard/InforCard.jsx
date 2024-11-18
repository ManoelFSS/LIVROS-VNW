import S from "./Styles.module.scss"

const InforCard = ({image, text}) => {
    return (
        <div className={S.card}>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default InforCard