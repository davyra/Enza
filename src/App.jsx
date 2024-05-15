import './App.scss'
import AppRouter from './AppRouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    )
}

export default App
