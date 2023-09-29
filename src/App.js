import React from 'react';
import Header from './components/header/header';
import MenuPage from './components/menuPage';
import Home from './components/homePage';
import Reservation from './components/reservationPage';
import PayPage from './components/payPage';
import LoginForm from './components/login/login';
import Footer from './components/footer/footer';
import GoToTop from './components/goToTop/goToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/pay' element={<PayPage/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
        <GoToTop/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
