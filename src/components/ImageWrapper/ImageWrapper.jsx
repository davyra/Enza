import './style.scss'
import { useNavigate } from 'react-router-dom'
import { ABOUT_PRODUCT_ROUTE } from '../../utils/routes'

const Group = ({ el, key, width, height }) => {
    const navigate = useNavigate()

    return (
        <div className="img-wrapper-group" key={key} onClick={() => navigate(ABOUT_PRODUCT_ROUTE)}>
            <img key={key} src={el.photo} alt={`Photo ${key}`} width={width} height={height} />
            <p>{el.text}</p>
            <span style={{ color: '#000' }}>{el.cost}$</span>
        </div>
    )
}

export default Group
