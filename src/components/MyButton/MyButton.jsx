import './style.scss'

const MyButton = ({ variant, children, className, ...props }) => {
    let buttonClass = ''

    switch (variant) {
        case 'primary':
            buttonClass = 'myButton-primary'
            break
        case 'secondary':
            buttonClass = 'myButton-secondary'
            break
        default:
            buttonClass = ''
    }

    return (
        <button className={`myButton-initial ${buttonClass} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default MyButton
