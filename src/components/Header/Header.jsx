import './style.scss'
import Shopping from '/src/assets/shopping.svg?react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS_ROUTE, BASKET_ROUTE, MAIN_ROUTE, CONTACT_ROUTE } from '../../utils/routes'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="header-component">
            <div className="content">
                <div className="text">
                    <span className="name">ENZA</span>
                    <div className="links">
                        <a onClick={() => navigate(MAIN_ROUTE)}>Home</a>
                        <a onClick={() => navigate(PRODUCTS_ROUTE)}>Products</a>
                        <a onClick={() => navigate(PRODUCTS_ROUTE, { state: 'new' })}>New</a>
                        <a onClick={() => navigate(CONTACT_ROUTE)}>Contact</a>
                    </div>
                </div>
                <div className="icons">
                    <Shopping className="colored-svg" onClick={() => navigate(BASKET_ROUTE)} />
                </div>
            </div>
        </div>
    )
}

export default Header
