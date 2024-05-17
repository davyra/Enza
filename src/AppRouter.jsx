import { Routes, Route, Navigate } from 'react-router-dom'
import { MAIN_ROUTE, PRODUCTS_ROUTE, CONTACT_ROUTE, BASKET_ROUTE, ABOUT_PRODUCT_ROUTE } from './utils/routes'
import ProductsPage from './pages/ProductsPage/ProductsPage'
// import ContactPage from './pages/ContactPage/ContactPage'
import AboutProductPage from './pages/AboutProductPage/AboutProductPage'
import MainPage from './pages/MainPage/MainPage'

function AppRouter() {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<MainPage />} />
            <Route path={PRODUCTS_ROUTE} element={<ProductsPage />} />
            {/* <Route path={CONTACT_ROUTE} element={<ContactPage />} />
            <Route path={BASKET_ROUTE} element={<AboutUsPage />} /> */}
            <Route path={ABOUT_PRODUCT_ROUTE + '/:id'} element={<AboutProductPage />} />
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
        </Routes>
    )
}

export default AppRouter
