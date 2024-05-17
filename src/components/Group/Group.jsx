import './style.scss'
import { useState, useEffect } from 'react'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

const Group = ({ photos }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const displayPhotos = windowWidth > 1207 ? photos : [photos[photos.length - 1]]

    return (
        <div className="group-component">
            {displayPhotos.map((el, index) => (
                <ImageWrapper el={el} key={index} num={index} width={297} height={363} />
            ))}
        </div>
    )
}

export default Group
