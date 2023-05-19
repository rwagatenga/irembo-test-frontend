import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider, AuthContext } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useContext } from 'react';

function App() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  console.log('APP', isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
              </>
            ) : (
              <>
                <Route path='/login' element={<Login />} />
                <Route path='/user/verify' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forget-password' element={<ForgetPassword />} />
              </>
            )}

            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
