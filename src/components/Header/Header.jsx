import './style.scss'
import Search from '/src/assets/search.svg'
import Shopping from '/src/assets/shopping.svg'

const Header = () => {
    return (
        <div className="header-component">
            <div className="content">
                <div className="text">
                    <span className="name">ENZA</span>
                    <div className="links">
                        <a>Home</a>
                        <a>Products</a>
                        <a>New</a>
                        <a>Contact</a>
                    </div>
                </div>
                <div className="icons">
                    <img src={Search} alt="Search icon" />
                    <img src={Shopping} alt="Shopping icon" />
                </div>
            </div>
        </div>
    )
}

export default Header
