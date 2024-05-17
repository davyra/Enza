import './style.scss'
import MyButton from '/src/components/MyButton/MyButton'

const Footer = () => {
    return (
        <div className="footer-component">
            <div className="main">
                <div className="list">
                    <div className="content">
                        <p className="name">Categories</p>
                        <p>Rings</p>
                        <p>Earrings</p>
                        <p>Bracelets</p>
                        <p>Best seller</p>
                        <p>New collections</p>
                        <p>All collections</p>
                    </div>
                    <div className="content">
                        <p className="name">Our company</p>
                        <p>About us</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>Sustainability</p>
                        <p>Fit guide</p>
                        <p>Collaborations</p>
                    </div>
                    <div className="content">
                        <p className="name">Customer support</p>
                        <p>Help center</p>
                        <p>Shipping information </p>
                        <p>Payment policy</p>
                        <p>Return policy</p>
                        <p>Privacy policy</p>
                        <p>Track my order</p>
                    </div>
                </div>

                <div className="sub">
                    <p className="name">Join our world</p>
                    <input type="text" placeholder="Email" />
                    <MyButton style={{ width: '184px', marginTop: '24px' }}>SUBSCRIBE</MyButton>
                </div>
            </div>
        </div>
    )
}

export default Footer
