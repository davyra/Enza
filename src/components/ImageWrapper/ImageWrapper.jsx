import './style.scss'
import { useNavigate } from 'react-router-dom'
import { ABOUT_PRODUCT_ROUTE } from '../../utils/routes'

const ImageWrapper = ({ el, num, width, height }) => {
    const navigate = useNavigate()

    return (
        <div className="img-wrapper-group" key={num} onClick={() => navigate(ABOUT_PRODUCT_ROUTE + `/${el.id}`)}>
            <img key={num} src={el.image} alt={`Photo ${num}`} width={width} height={height} />
            <p>{el.text}</p>
            <span style={{ color: '#000' }}>{el.cost}$</span>
        </div>
    )
}

export default ImageWrapper
