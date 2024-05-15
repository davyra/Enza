import './style.scss'
import MyButton from '/src/components/MyButton/MyButton'
import Swiper from '../../components/Swiper/Swiper'

const MainPage = () => {
    return (
        <div className="main-page">
            <img src="../../assets/mainBack.png" alt="Hand" className="background"></img>
            <h2 style={{ marginBottom: '26px' }}>Shop Our Collections</h2>

            <div className="our-photos">
                <div class="img-container big">
                    <img src="../../assets/earrings.png" alt="earrings" className="big" />
                    <div className="text">Earrings</div>
                </div>
                <div class="two-img">
                    <div class="img-container small">
                        <img src="../../assets/braceletes.png" alt="bracelets" className="small" />
                        <div className="text">Bracelets</div>
                    </div>
                    <div class="img-container small">
                        <img src="../../assets/rings.png" alt="rings" className="small" />
                        <div className="text">Rings</div>
                    </div>
                </div>
                <div class="img-container big">
                    <img src="../../assets/neckless.png" alt="neckless" className="big" />
                    <div className="text">Neckless</div>
                </div>
            </div>

            <MyButton className="myButton">VIEW ALL</MyButton>

            <h2 style={{ marginBottom: '26px' }}>
                <span style={{ fontWeight: 700 }}>NEW</span> COLLECTION
            </h2>

            <div className="collection">
                <div className="serpentine">
                    <div className="snake">
                        <img src="../../assets/snake.png" alt="Snake" width={429} height={380}></img>
                        <img src="../../assets/snake-black.svg" alt="Snake" className="snake-logo"></img>
                    </div>
                    <div>
                        <h3>Serpentine Elegance </h3>
                        The Serpentine Elegance collection captures the mesmerizing allure and mystique of the snake, symbolizing
                        transformation, rebirth, and eternal beauty. From delicate serpent-inspired necklaces and bracelets to
                        bold statement rings, the Serpentine Elegance collection offers a range of stunning pieces that are sure
                        to captivate and inspire. Embrace the enchanting spirit of the snake with this extraordinary collection
                        that celebrates the power and grace of nature's most intriguing creature.
                    </div>
                </div>

                <div></div>
                <Swiper />
            </div>
        </div>
    )
}

export default MainPage
