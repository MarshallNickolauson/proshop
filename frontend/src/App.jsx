import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './screens/NotFoundPage';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import ShippingPage from './screens/ShippingPage';
import PrivateRoutes from './components/PrivateRoutes';
import PaymentPage from './screens/PaymentPage';
import PlaceOrderPage from './screens/PlaceOrderPage';
import OrderPage from './screens/OrderPage';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route index element={<HomePage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='' element={<PrivateRoutes />}>
                    <Route path='/shipping' element={<ShippingPage />} />
                    <Route path='/payment' element={<PaymentPage />} />
                    <Route path='/placeorder' element={<PlaceOrderPage />} />
                    <Route path='/order/:id' element={<OrderPage />} />
                </Route>
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
