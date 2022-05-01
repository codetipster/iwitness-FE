import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import Explore from './pages/Explore'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'


function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> 
        </Routes>
        <Navbar />
      </Router> 
    </>
  );
}

export default App;
