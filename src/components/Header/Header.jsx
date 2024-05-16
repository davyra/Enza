import './style.scss'
import Search from '/src/assets/search.svg'
import { ReactComponent as Shopping } from '/src/assets/shopping.svg'
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
                    {/* <img src={Search} alt="Search icon" /> */}
                    <Shopping alt="Shopping icon" onClick={() => navigate(BASKET_ROUTE)} />
                </div>
            </div>
        </div>
    )
}

export default Header
