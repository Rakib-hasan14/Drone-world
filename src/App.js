import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './components/Context/AuthContext';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
