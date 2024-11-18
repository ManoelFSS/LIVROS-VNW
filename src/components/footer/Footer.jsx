import S from "./Styles.module.scss"
//icones
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className={S.footer}>
            <section className={S.top_footer}>
                <div className={S.top_footer_area}>
                    <p>4002-8922</p>
                    <div className={S.social_media}>
                        <FaFacebook className={S.icon} />
                        <FaTwitter className={S.icon} />
                        <FaYoutube className={S.icon} />
                        <FaLinkedin className={S.icon} />
                        <FaInstagram  className={S.icon} />
                    </div>
                </div>
            </section>

            <section className={S.bottom_footer}>
                <p>© Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>

        </footer>
    )
}

export default Footer