import './style.scss'
import Select from 'react-select'

const MySelect = ({ options, placeholder, currentFilter, setCurrentFilter, width }) => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: `${width}px`
        })
    }

    const getValue = () => {
        return currentFilter ? options.find((b) => b.value === currentFilter) : ''
    }

    const onChange = (newValue) => {
        newValue ? setCurrentFilter(newValue.value) : setCurrentFilter('')
    }

    return (
        <Select
            styles={customStyles}
            onChange={onChange}
            value={getValue()}
            isSearchable={false}
            isClearable
            options={options}
            placeholder={placeholder}
            classNamePrefix="react-select"
            className="custom-select"
        />
    )
}

export default MySelect
