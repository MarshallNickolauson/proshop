import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './screens/NotFoundPage';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import ShippingPage from './screens/ShippingPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route path='*' element={<NotFoundPage />} />
        <Route index element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shipping' element={<ShippingPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
