
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/header/Header';
import Edit from './pages/edit/Edit';
import Home from './pages/home/Home';
import Pagenotfound from './pages/pagenotfound/Pagenotfound';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';


function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='*' element={<Pagenotfound/>}/>


       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
