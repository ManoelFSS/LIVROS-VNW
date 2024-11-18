import S from "./Styles.module.scss"
import Banner from "../../components/banner/Banner"
import InforCard from "../../components/cards/inforCard/InforCard"
import Title from "../../components/title/Title"
// dataBase
import images from "./dataInfor"

const Home = () => {
    return (
        <section className={S.home}>
            <Banner />
            <section className={S.container} >
                <div className={S.container_infor}>
                    <Title 
                        text="Por que devo doar?"
                        color="#005695"
                    />
                    <div className={S.cards_area}>
                        {
                            images.map((item, index) => (
                                <InforCard 
                                    key={index} 
                                    image={item.image} 
                                    text={item.text}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home