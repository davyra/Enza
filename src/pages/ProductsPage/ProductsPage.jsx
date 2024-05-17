import './style.scss'
import { useState, useEffect } from 'react'
import MySelect from '../../components/MySelect/MySelect'
import { useLocation } from 'react-router-dom'
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper'
import { products } from '../../utils/db'

const placeholderCollections = 'Collections'
const optionsCollections = [
    { value: 'ourCollection', label: 'Our collection' },
    { value: 'newCollection', label: 'New collection' }
]

const placeholderMaterials = 'Materials'
const optionsMaterials = [
    { value: 'silver', label: 'Silver' },
    { value: '18K Yellow Gold', label: '18K Yellow Gold' },
    { value: '18K White Gold', label: '18K White Gold' }
]

const placeholderGender = 'Gender'
const optionsGender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
]

const placeholderPrice = 'Price'
const optionsPrice = [
    { value: '>1000', label: '> 1000' },
    { value: '<1000', label: '< 1000' },
    { value: '<500', label: '< 500' }
]

const ProductsPage = () => {
    const location = useLocation()

    const [currentFilterCollections, setCurrentFilterCollections] = useState(
        location.state === 'new' ? 'newCollection' : 'ourCollection'
    )
    const [currentFilterMaterials, setCurrentFilterMaterials] = useState('')
    const [currentFilterGender, setCurrentFilterGender] = useState('')
    const [currentFilterPrice, setCurrentFilterPrice] = useState('')

    const filterData = () => {
        return products.filter((item) => {
            return (
                (!currentFilterCollections || item.collection === currentFilterCollections) &&
                (!currentFilterMaterials || item.material === currentFilterMaterials) &&
                (!currentFilterGender || item.gender === currentFilterGender) &&
                (!currentFilterPrice ||
                    (currentFilterPrice === '>1000' && item.cost > 1000) ||
                    (currentFilterPrice === '<1000' && item.cost < 1000) ||
                    (currentFilterPrice === '<500' && item.cost < 500))
            )
        })
    }

    const filteredData = filterData()

    return (
        <div className="products-page">
            {currentFilterCollections === 'ourCollection' ? (
                <h1>OUR PRODUCTS</h1>
            ) : (
                <h1>
                    <span className="name">NEW</span> COLLECTIONS
                </h1>
            )}
            <div className="filters">
                <span className="fil">Filter by:</span>
                <MySelect
                    width={208}
                    placeholder={placeholderCollections}
                    currentFilter={currentFilterCollections}
                    options={optionsCollections}
                    setCurrentFilter={setCurrentFilterCollections}
                />
                <MySelect
                    width={158}
                    placeholder={placeholderGender}
                    currentFilter={currentFilterGender}
                    options={optionsGender}
                    setCurrentFilter={setCurrentFilterGender}
                />
                <MySelect
                    width={208}
                    placeholder={placeholderMaterials}
                    currentFilter={currentFilterMaterials}
                    options={optionsMaterials}
                    setCurrentFilter={setCurrentFilterMaterials}
                />
                <MySelect
                    width={150}
                    placeholder={placeholderPrice}
                    currentFilter={currentFilterPrice}
                    options={optionsPrice}
                    setCurrentFilter={setCurrentFilterPrice}
                />
            </div>

            <div className="container">
                {filteredData.length > 0 ? (
                    <div className="wrapper">
                        {filteredData.map((el, index) => (
                            <ImageWrapper el={el} key={index} num={index} width={372} height={465} />
                        ))}
                    </div>
                ) : (
                    <h1>No items match your criteria</h1>
                )}
            </div>
        </div>
    )
}

export default ProductsPage
