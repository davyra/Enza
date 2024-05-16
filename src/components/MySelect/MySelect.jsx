import './style.scss'
import Select from 'react-select'


const MySelect = ({options, placeholder,currentFilter, setCurrentFilter}) => {
    const getValue = () => {
        return currentFilter ? options.find(b => b.value === currentFilter) : ''
    }
  
    const onChange = (newValue) => {
      newValue ? setCurrentFilter(newValue.value) : setCurrentFilter('')
    }
  
      return (
        <Select onChange={onChange} value={getValue()} isSearchable={false} options={options} placeholder={placeholder}
        classNamePrefix='custom-select' className="custom-select"/>
      )
}

export default MySelect
