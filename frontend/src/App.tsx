import Home from './Pages/Home';
import Login from './Pages/Login';
import { Route,Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;