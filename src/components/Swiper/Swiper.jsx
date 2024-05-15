import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef, useState } from 'react'
import Slider from 'react-slick'

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
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false
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
                    <img src="../../assets/slider/ring1.png" alt="Ring" width={409} height={641}></img>
                </div>
                <div className="wrapper" key={2}>
                    <img src="../../assets/slider/ring2.png" alt="Ring" width={409} height={641}></img>
                </div>
                <div className="wrapper" key={3}>
                    <img src="../../assets/slider/ring3.png" alt="Neckless" width={409} height={641}></img>
                </div>
                <div className="wrapper" key={4}>
                    <img src="../../assets/slider/ring4.png" alt="Neckless" width={409} height={641}></img>
                </div>
            </Slider>
            <div style={{ textAlign: 'center' }}>
                <button className="button" onClick={previous} disabled={count === 1}>
                    {'<'}
                </button>
                <span>{count}/4</span>
                <button className="button" onClick={next} disabled={count === 4}>
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Swiper
