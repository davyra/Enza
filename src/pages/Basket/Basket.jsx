import './style.scss'
import { useState } from 'react'
import MyButton from '/src/components/MyButton/MyButton'
import { CONTACT_ROUTE } from '../../utils/routes'

import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/cartSlice'

const Basket = ({}) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.items)
    const total = useSelector((state) => state.cart.totalAmount)

    const [step, setStep] = useState(1)

    console.log(total)
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div className="cart-page">
            <div className="stepOne">
                <h1>CART</h1>
                <div className="content">
                    <div className="list">
                        {products.map((product) => (
                            <div className="product" key={product.id}>
                                <img width={297} height={363} src={product.image} alt={`product`} />
                                <div className="text">
                                    <p className="name">{product.text}</p>
                                    <p className="cost">{product.cost}$</p>
                                    <p style={{ color: '#0C0101' }}>Material:</p>
                                    <p className="material">{product.material}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <MyButton
                                        variant="secondary"
                                        style={{ marginTop: '50px' }}
                                        onClick={() => handleRemoveItem(product.id)}
                                    >
                                        Remove
                                    </MyButton>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sum">
                        <h3>Summary</h3>
                        <hr />
                        <div className="text">
                            <span>Subtotal</span>
                            {total}$
                        </div>
                        <div className="text">
                            <span>Delivery</span>0$
                        </div>

                        <div className="text">
                            <input type="text" placeholder="Promocode" />
                            <MyButton variant="primary" style={{ width: '177px' }}>
                                APPLY
                            </MyButton>
                        </div>

                        <MyButton style={{ width: '430px', marginTop: '32px' }} onClick={() => setStep(2)}>
                            CHECKOUT
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
