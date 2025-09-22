import Home from './Pages/Home';
import Login from './Pages/Login';
import { Route,Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import DocumentationPage from './Pages/DocumentationPage';

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/documentation' element={<DocumentationPage />} />
      </Routes>
    </div>
  )
}

export default App;