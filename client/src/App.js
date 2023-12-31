import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register'
import { BrowserRouter as Router, Link, Route, Routes, redirect, useNavigate ,Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {user} = useContext(AuthContext)
  return (


<Router>
     <Routes>
        <Route path="/" element={ user ? <Home/> : <Login/> } />
        <Route path="/login" element={user ? redirect("/") : <Login/>} />
        <Route path="/register" element={user ? redirect("/") : <Register/>}  />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
</Router>


     


      );
}

export default App;
