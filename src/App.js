import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Downloads from './components/Downloads/Downloads';
import Login from './components/Downloads/Login';

// Components
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Restrito from './components/Restrito/Restrito';


function App() {

  const validPasswords = ['56854723'];

  const [error, setError] = useState();

  const isValidPassword = () => validPasswords.includes(localStorage.getItem('password'))

  const handleLogin = (value) => {
    setError('')

    localStorage.setItem("password", value);
    
    if (isValidPassword()) {
      window.location.reload()
    } else {
      setError('Senha inválida')
    }
    
  };
  const handleLogout = () => {
    localStorage.setItem('password', null);
    window.location.href = '/'
  };

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/produto/:id", element: <Product /> },
    // { path: "/restrito", element: <Restrito /> },
    { path: "/restrito", element: isValidPassword() ? <Downloads handleLogout={handleLogout}  /> : <Login handleLogin={handleLogin} error={error} setError={setError} /> },
    // { path: "/restr", element: isValidPassword() ? <Restrito handleLogout={handleLogout}  /> : <Login handleLogin={handleLogin} error={error} setError={setError} /> }
  ]);

  return routes
}

export default App;
