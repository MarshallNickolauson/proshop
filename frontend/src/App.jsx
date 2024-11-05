import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './screens/NotFoundPage';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route path='*' element={<NotFoundPage />} />
        <Route index element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
