import './style.scss'
import MyButton from '/src/components/MyButton/MyButton'
import Swiper from '../../components/Swiper/Swiper'
import Hand from '../../assets/mainBack.jpg'
import Earrings from '../../assets/earrings.png'
import Bracelets from '../../assets/braceletes.png'
import Rings from '../../assets/rings.png'
import Neckless from '../../assets/neckless.png'
import Snake from '../../assets/snake.png'
import SnakeLogo from '../../assets/snake-black.svg'

import Ring2 from '../../assets/slider/ring2.png'
import Ring3 from '../../assets/slider/ring3.png'
import Ring4 from '../../assets/slider/ring4.png'

import Group from '../../components/Group/Group'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS_ROUTE } from '../../utils/routes'

const MainPage = () => {
    const navigate = useNavigate()

    const photoForBest = [
        {
            cost: 100,
            text: 'Enigma Coil Bracelet',
            image: '/17.png'
        },
        {
            cost: 150,
            text: 'Enchanted Necklace',
            image: '/18.png'
        },
        {
            cost: 100,
            text: 'Whispering Breeze Ring',
            image: '/19.png'
        },
        {
            cost: 200,
            text: 'Luna Drops',
            image: '/20.png'
        }
    ]

    return (
        <div className="main-page">
            <img src={Hand} alt="Hand" className="background"></img>
            <h2 style={{ marginBottom: '26px' }}>Shop Our Collections</h2>

            <div className="our-photos">
                <div className="img-container big">
                    <img src={Earrings} alt="earrings" className="big" />
                    <div className="text">Earrings</div>
                </div>
                <div className="two-img">
                    <div className="img-container small">
                        <img src={Bracelets} alt="bracelets" className="small" />
                        <div className="text">Bracelets</div>
                    </div>
                    <div className="img-container small">
                        <img src={Rings} alt="rings" className="small" />
                        <div className="text">Rings</div>
                    </div>
                </div>
                <div className="img-container big">
                    <img src={Neckless} alt="neckless" className="big" />
                    <div className="text">Neckless</div>
                </div>
            </div>

            <MyButton className="myButton" onClick={() => navigate(PRODUCTS_ROUTE)}>
                VIEW ALL
            </MyButton>

            <h2 style={{ marginBottom: '26px' }}>
                <span style={{ fontWeight: 700 }}>NEW</span> COLLECTION
            </h2>

            <div className="collection">
                <div className="serpentine">
                    <div className="snake">
                        <img src={Snake} alt="Snake" width={429} height={380}></img>
                        <img src={SnakeLogo} alt="Snake" className="snake-logo"></img>
                    </div>
                    <div className="elegance">
                        <h3>Serpentine Elegance </h3>
                        The Serpentine Elegance collection captures the mesmerizing allure and mystique of the snake, symbolizing
                        transformation, rebirth, and eternal beauty. From delicate serpent-inspired necklaces and bracelets to
                        bold statement rings, the Serpentine Elegance collection offers a range of stunning pieces that are sure
                        to captivate and inspire. Embrace the enchanting spirit of the snake with this extraordinary collection
                        that celebrates the power and grace of nature's most intriguing creature.
                    </div>
                </div>

                <div className="text">
                    <div className="line"></div>
                    <span>WOMEN / MAN</span>
                    <div className="line"></div>
                </div>
                <div className="gallery">
                    <Swiper />
                    <div className="right">
                        <div className="photos">
                            <div className="wrapper">
                                <img src={Ring2} alt="ring2" width={244} height={366} />
                            </div>
                            <div className="wrapper">
                                <img src={Ring3} alt="ring3" width={244} height={366} />
                            </div>
                            <div className="wrapper">
                                <img src={Ring4} alt="ring4" width={244} height={366} />
                            </div>
                        </div>
                        <div className="elegance">
                            <h3>Serpent's Embrace Earrings</h3>
                            The Silver Serpent Coil Earrings are a sleek and modern interpretation of the snake motif. Crafted
                            from sterling silver, these earrings feature a coiled snake design that elegantly curves around the
                            earlobe. The smooth, polished finish enhances the minimalist aesthetic, making them perfect for both
                            casual and formal occasions. These earrings are a versatile and stylish addition to any jewelry
                            collection, symbolizing wisdom, transformation, and renewal.
                        </div>
                    </div>
                </div>

                <MyButton style={{ marginTop: '40px' }} onClick={() => navigate(PRODUCTS_ROUTE, { state: 'new' })}>
                    EXPLORE
                </MyButton>
            </div>

            <h2 style={{ marginBottom: '32px', marginTop: '57px' }}>BEST SELLER</h2>
            <Group photos={photoForBest} />
            <MyButton
                style={{ marginTop: '40px', marginBottom: '121px' }}
                className="myButton"
                onClick={() => navigate(PRODUCTS_ROUTE)}
            >
                SHOP NOW
            </MyButton>
        </div>
    )
}

export default MainPage
