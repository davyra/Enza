import './style.scss'
import MyButton from '/src/components/MyButton/MyButton'
import Swiper from '../../components/Swiper/Swiper'
import Hand from '../../assets/mainBack.png'
import Earrings from '../../assets/earrings.png'
import Bracelets from '../../assets/braceletes.png'
import Rings from '../../assets/rings.png'
import Neckless from '../../assets/neckless.png'
import Snake from '../../assets/snake.png'
import SnakeLogo from '../../assets/snake-black.svg'

const MainPage = () => {
    return (
        <div className="main-page">
            <img src={Hand} alt="Hand" className="background"></img>
            <h2 style={{ marginBottom: '26px' }}>Shop Our Collections</h2>

            <div className="our-photos">
                <div class="img-container big">
                    <img src={Earrings} alt="earrings" className="big" />
                    <div className="text">Earrings</div>
                </div>
                <div class="two-img">
                    <div class="img-container small">
                        <img src={Bracelets} alt="bracelets" className="small" />
                        <div className="text">Bracelets</div>
                    </div>
                    <div class="img-container small">
                        <img src={Rings} alt="rings" className="small" />
                        <div className="text">Rings</div>
                    </div>
                </div>
                <div class="img-container big">
                    <img src={Neckless} alt="neckless" className="big" />
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
                        <img src={Snake} alt="Snake" width={429} height={380}></img>
                        <img src={SnakeLogo} alt="Snake" className="snake-logo"></img>
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
