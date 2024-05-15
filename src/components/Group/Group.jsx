import './style.scss'
import { useState, useEffect } from 'react'

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
                <div className="group" key={index}>
                    <img key={index} src={el.photo} alt={`Photo ${index}`} />
                    <p>{el.text}</p>
                    <span style={{ color: '#000' }}>{el.cost}$</span>
                </div>
            ))}
        </div>
    )
}

export default Group
