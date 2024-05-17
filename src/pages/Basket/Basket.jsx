import './style.scss'
import { useEffect, useState } from 'react'
import MyButton from '/src/components/MyButton/MyButton'
import { PRODUCTS_ROUTE } from '../../utils/routes'

import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/cartSlice'

import Pal from '/src/assets/pay.png'
import Google from '/src/assets/gogle.png'
import Two from '/src/assets/second.jpeg'
import Third from '/src/assets/third.png'
import { useNavigate } from 'react-router-dom'

const Basket = ({}) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.items)
    const total = useSelector((state) => state.cart.totalAmount)

    const amount = products.reduce((total, item) => total + item.quantity, 0)

    const [step, setStep] = useState(1)

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    const randomNumber = Math.floor(10000 + Math.random() * 90000)

    // useEffect(() => {
    //     console.log(randomNumber)
    //     randomNumber = Math.floor(10000 + Math.random() * 90000)
    //     console.log(randomNumber)
    // }, [])

    if (step === 2) {
        return (
            <div className="cart-page">
                <div className="stepTwo">
                    <div className="head">
                        <hr />
                        <div className="one">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M29.3334 14.774V16.0006C29.3318 18.8759 28.4007 21.6735 26.6792 23.9764C24.9576 26.2793 22.5378 27.9639 19.7806 28.7792C17.0233 29.5944 14.0764 29.4965 11.3794 28.5001C8.68232 27.5037 6.37962 25.6621 4.8147 23.2501C3.24977 20.838 2.50647 17.9847 2.69565 15.1157C2.88483 12.2467 3.99636 9.51573 5.86445 7.33006C7.73255 5.14439 10.2571 3.62114 13.0617 2.98749C15.8662 2.35385 18.8004 2.64375 21.4268 3.81397"
                                    stroke="#009F96"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M29.3333 5.33337L16 18.68L12 14.68"
                                    stroke="#009F96"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <hr />
                        <div className="two">
                            <img src={Two} alt={`pay`} />
                        </div>
                        <hr />
                        <div className="three">
                            <img src={Third} alt={`pay`} />
                        </div>
                        <hr />
                    </div>

                    <div className="options">
                        <div className="pay">
                            <input name="drone" type="radio" />
                            <img src={Pal} alt={`pay`} />
                        </div>

                        <div className="pay">
                            <input name="drone" type="radio" />
                            <img src={Google} alt={`pay`} />
                        </div>
                    </div>

                    <div className="content">
                        <div className="inputs">
                            <div className="wrapper">
                                Cardholder
                                <div style={{ display: 'flex' }}>
                                    <input style={{ width: '295px', marginRight: '8px' }} type="text" placeholder="Name" />
                                    <input style={{ width: '295px' }} type="text" placeholder="Surname" />
                                </div>
                            </div>

                            <div className="wrapper">
                                Card number
                                <input style={{ width: '598px' }} type="text" placeholder="" />
                            </div>

                            <div className="wrapper">
                                Expiration
                                <div style={{ display: 'flex', width: '598px' }}>
                                    <input
                                        style={{ marginRight: '8px', width: '209px' }}
                                        type="number"
                                        min={1}
                                        placeholder="Month"
                                    />
                                    <input
                                        style={{ width: '209px', marginRight: '22px' }}
                                        type="number"
                                        placeholder="Year"
                                        min={2020}
                                    />
                                    <input style={{ width: '150px' }} type="number" placeholder="CVV" min={1} />
                                </div>
                            </div>

                            <div className="wrapper">
                                City for delivery
                                <input style={{ width: '598px' }} type="text" placeholder="" />
                            </div>

                            <div className="wrapper">
                                Post office
                                <input style={{ width: '598px' }} type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="sum">
                            <div className="text">
                                <span>Subtotal ({amount === 1 ? '1 item' : `${amount} items`})</span>
                                {total}$
                            </div>
                            <div className="text">
                                <span>Delivery cost</span>0$
                            </div>
                            <hr />
                            <div className="text">
                                <span>Total</span>
                                <span>{total}$</span>
                            </div>

                            <MyButton
                                style={{ display: 'block', width: '204px', margin: '40px auto 0' }}
                                onClick={() => setStep(3)}
                            >
                                CONFIRM PAYMENT
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (step === 3) {
        return (
            <div className="cart-page">
                <div className="stepThree">
                    <div className="head">
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.3334 14.774V16.0006C29.3318 18.8759 28.4007 21.6735 26.6792 23.9764C24.9576 26.2793 22.5378 27.9639 19.7806 28.7792C17.0233 29.5944 14.0764 29.4965 11.3794 28.5001C8.68232 27.5037 6.37962 25.6621 4.8147 23.2501C3.24977 20.838 2.50647 17.9847 2.69565 15.1157C2.88483 12.2467 3.99636 9.51573 5.86445 7.33006C7.73255 5.14439 10.2571 3.62114 13.0617 2.98749C15.8662 2.35385 18.8004 2.64375 21.4268 3.81397"
                                stroke="#009F96"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M29.3333 5.33337L16 18.68L12 14.68"
                                stroke="#009F96"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="title">CART</span>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '20px', lineHeight: '24px' }}>
                        Thank you, your payment was successful. <br />
                        You will receive an order conformation email with details of your order{' '}
                    </p>
                    <hr />

                    <p style={{ textAlign: 'center', fontSize: '24px', lineHeight: '29px', fontWeight: '500' }}>Order summary</p>

                    <div className="sum">
                        <div className="text">
                            <span>Order code</span>
                            {randomNumber}
                        </div>
                        <div className="text" style={{ marginBottom: '12px' }}>
                            <span>Quantity </span>
                            {amount}
                        </div>
                        <hr />
                        <div className="text">
                            <span>Total</span>
                            <span>{total}$</span>
                        </div>
                    </div>

                    <div className="list">
                        {products.map((el, index) => (
                            <div className="wrapper">
                                <img key={index} src={el.image} alt="product" width={152} height={148} />
                                <div className="text">
                                    <p>{el.text}</p>
                                    <span style={{ color: '#000' }}>{el.cost}$</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <MyButton
                        style={{ display: 'block', width: '230px', margin: '40px auto 0' }}
                        onClick={() => navigate(PRODUCTS_ROUTE)}
                    >
                        CONTINUE SHOPPING
                    </MyButton>
                </div>
            </div>
        )
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

                        <MyButton style={{ width: '430px', marginTop: '32px' }} onClick={() => setStep(2)} disabled={!total}>
                            CHECKOUT
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
