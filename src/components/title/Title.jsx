import S from "./Styles.module.scss"

const Title = ({text, color, textAlign}) => {
    return (
        <h2 
            className={S.title}
            style={
                {
                    color: color,
                    textAlign: textAlign
                }
            }

        >{text}</h2>
    )
}

export default Title