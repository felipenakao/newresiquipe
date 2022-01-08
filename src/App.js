import { useRoutes } from 'react-router-dom';

// Components
import Home from './components/Home/Home'
import Product from './components/Product/Product'

function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/product', element: <Product /> }
  ]);

  return routes
}

export default App;
