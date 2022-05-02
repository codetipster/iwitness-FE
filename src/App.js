import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Explore from './pages/Explore'
import PrivateRoute from './components/PrivateRoutes'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Publications from './pages/PublicationsCategory'

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/publications/:publicationName' element={<Publications />} />
          <Route path='/profile' element={<PrivateRoute />}>
             <Route path='/profile' element={<Profile />} />
          </Route> 
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> 
        </Routes>
        <Navbar/>
      </Router> 

      <ToastContainer />
    </>
  );
}

export default App;
