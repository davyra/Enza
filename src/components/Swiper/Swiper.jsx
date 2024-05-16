import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import Ring1 from '../../assets/slider/ring1.png'
import Ring2 from '../../assets/slider/ring2.png'
import Ring3 from '../../assets/slider/ring3.png'
import Ring4 from '../../assets/slider/ring4.png'

const Swiper = () => {
    const [count, setCount] = useState(1)

    let sliderRef = useRef(null)
    const next = () => {
        sliderRef.slickNext()
        setCount((prev) => prev + 1)
    }
    const previous = () => {
        sliderRef.slickPrev()
        setCount((prev) => prev - 1)
    }

    const afterChangeHandler = (currentSlide) => {
        setCount(currentSlide + 1)
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        afterChange: afterChangeHandler
    }

    return (
        <div className="swiper-component">
            <Slider
                ref={(slider) => {
                    sliderRef = slider
                }}
                {...settings}
            >
                <div className="wrapper" key={1}>
                    <img src={Ring1} alt="Ring" width={409} height={639}></img>
                </div>
                <div className="wrapper" key={2}>
                    <img src={Ring2} alt="Ring" width={409} height={639}></img>
                </div>
                <div className="wrapper" key={3}>
                    <img src={Ring3} alt="Neckless" width={409} height={639}></img>
                </div>
                <div className="wrapper" key={4}>
                    <img src={Ring4} alt="Neckless" width={409} height={639}></img>
                </div>
            </Slider>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button className="button" onClick={previous} disabled={count === 1}>
                    {'<'}
                </button>
                <span style={{ margin: '0 19px' }}>
                    {count}/<span className="four">4</span>
                </span>
                <button className="button" onClick={next} disabled={count === 4}>
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Swiper
