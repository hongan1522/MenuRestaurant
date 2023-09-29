import React, { useState, useEffect } from 'react';
import './header.css';
import '../default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSubMenu = () => {
    setIsActive(!isActive);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="header flex between header-font">
      <ul className='menu-header'>
        <li onClick={scrollToTop}><Link  to="/">Trang Chủ</Link></li>
        <li><Link  to="/pay">Đơn Hàng</Link></li>
        <li onClick={toggleSubMenu} className={isActive ? 'active' : ''}>
          <Link to="/menu">Thực Đơn</Link>
          {/* <ul className="sub-menu">
            <li>Thực Đơn Khai Vị</li>
            <li>Thực Đơn Bữa Sáng</li>
            <li>Thực Đơn Bữa Trưa</li>
            <li>Thực Đơn Bữa Tối</li>
          </ul> */}
        </li>
        <li><Link to="/reservation">Đặt Bàn</Link></li>
      </ul>
      <ul className="right">
        <li><Link to="/login"><FontAwesomeIcon icon={faUser} /></Link></li>
        <li><FontAwesomeIcon icon={faPhone} /></li>
      </ul>
    </div>
  );
}

export default Header;
