import './style.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../utils/db'
import Group from '../../components/Group/Group'
import MyButton from '/src/components/MyButton/MyButton'
import { BASKET_ROUTE, CONTACT_ROUTE } from '../../utils/routes'

import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'

import Car from '../../assets/car.svg'
import Bag from '../../assets/bag.svg'
import Rings from '../../assets/rings.svg'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AboutProductPage = ({}) => {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)
    const notify = () => toast.success('Product successfully added to cart')

    const { id } = useParams()
    const product = products.find((el) => el.id === +id)
    const ids = product.collection === 'newCollection' ? [12, 21, 11, 22] : [13, 14, 15, 16]
    const filteredProducts = products.filter((product) => ids.includes(product.id))

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                text: product.text,
                material: product.material,
                cost: product.cost,
                image: product.image,
                quantity
            })
        )

        notify()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="about-product-page">
            <div className="product">
                <img style={{ objectFit: 'contain' }} src={product.image} alt={`product`} />

                <div className="text">
                    <p className="name">{product.text}</p>
                    <p className="cost">{product.cost}$</p>
                    <hr />
                    <p style={{ color: '#0C0101' }}>Material:</p>
                    <p className="material">
                        <span className={product.material === 'silver' ? 'under' : ''}>Silver</span>
                        <span
                            className={product.material === '18K Yellow Gold' ? 'under' : ''}
                            style={{ marginLeft: '25px', marginRight: '25px' }}
                        >
                            18K Yellow Gold
                        </span>
                        <span className={product.material === '18K White Gold' ? 'under' : ''}>18K White Gold</span>
                    </p>
                    <p>Quantity:</p>
                    <input type="number" value={quantity} min={1} onChange={(event) => setQuantity(+event.target.value)} />
                    <br />
                    <MyButton style={{ width: '383px', marginTop: '32px', marginBottom: '24px' }} onClick={handleAddToCart}>
                        ADD TO BAG
                    </MyButton>

                    <ToastContainer />

                    <br />
                    <MyButton
                        style={{ width: '383px', marginBottom: '32px' }}
                        variant="primary"
                        onClick={() => navigate(CONTACT_ROUTE)}
                    >
                        CONTACT CUSTOMER CARE
                    </MyButton>
                    <br />
                    <div className="icons">
                        <div className="wrapper">
                            <img src={Car} alt="Car" /> 3-day shipping
                        </div>
                        <div className="wrapper">
                            <img src={Bag} alt="Bag" /> 30-day returns
                        </div>
                        <div className="wrapper">
                            <img src={Rings} alt="Rings" /> Free resize
                        </div>
                    </div>
                </div>
            </div>
            <h1>You may also like</h1>
            <Group photos={filteredProducts} />
        </div>
    )
}

export default AboutProductPage
