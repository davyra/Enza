import './style.scss'
import { useState } from 'react'
import MySelect from '../../components/MySelect/MySelect'
import {useLocation} from 'react-router-dom'

const placeholderCollections = 'Collections'
const optionsCollections = [
    { value: 'ourCollection', label: 'Our collection' },
    { value: 'newCollection', label: 'New collection' },

  ]

  const placeholderMaterials = 'Materials'
  const optionsMaterials = [
    { value: 'silver', label: 'Silver' },
    { value: '18K Yellow Gold', label: '18K Yellow Gold' },
    { value: '18K White Gold', label: '18K White Gold' }
  ]

  const placeholderGender = 'Gender'
  const optionsGender = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
      
  ]

  const placeholderPrice = 'Price'
  const optionsPrice = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
  ]

const ProductsPage = () => {
    const location = useLocation()

    const [currentFilterCollections, setCurrentFilterCollections] = useState(location.state === "new" ? "newCollection" : "ourCollection")
    const [currentFilterMaterials, setCurrentFilterMaterials] = useState()
    const [currentFilterGender, setCurrentFilterGender] = useState()
    const [currentFilterPrice, setCurrentFilterPrice] = useState()

    
    return (
        <div className="products-page">
            {currentFilterCollections === "ourCollection" ? <h1>OUR PRODUCTS</h1> : <h1><span className='name'>NEW</span> COLLECTIONS</h1>}
            <div className='filters'><span className='fil'>Filter by:</span>
            <MySelect styles={{
    control: (baseStyles) => ({
      ...baseStyles,
      width: '208px',
    }),
  }} placeholder={placeholderCollections} currentFilter={currentFilterCollections} options={optionsCollections} setCurrentFilter={setCurrentFilterCollections}/>
            <MySelect placeholder={placeholderGender} currentFilter={currentFilterGender} options={optionsGender} setCurrentFilter={setCurrentFilterGender}/>
            <MySelect placeholder={placeholderMaterials} currentFilter={currentFilterMaterials} options={optionsMaterials} setCurrentFilter={setCurrentFilterMaterials}/>
            <MySelect placeholder={placeholderPrice} currentFilter={currentFilterPrice} options={optionsPrice} setCurrentFilter={setCurrentFilterPrice}/>
            </div>
        </div>
    )
}

export default ProductsPage
