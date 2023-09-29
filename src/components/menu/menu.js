import React, { useState } from 'react';
import './menu.css';
import '../default.css'

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('appetizer');

  const handleMenuChange = (menuType) => {
    setActiveMenu(menuType);
  }
  

  const appetizerMenu = [
    { id: 1, name: 'Khai Vị 1', price: '$7.99', image: '/images/menu/menu-item-1.png' },
    { id: 2, name: 'Khai Vị 2', price: '$9.99', image: '/images/menu/menu-item-2.png' },
    { id: 3, name: 'Khai Vị 3', price: '$9.99', image: '/images/menu/menu-item-3.png' },
    { id: 4, name: 'Khai Vị 4', price: '$9.99', image: '/images/menu/menu-item-4.png' },
    { id: 5, name: 'Khai Vị 5', price: '$9.99', image: '/images/menu/menu-item-5.png' },
    { id: 6, name: 'Khai Vị 6', price: '$9.99', image: '/images/menu/menu-item-6.png' }
  ];

  const breakfastMenu = [
    { id: 1, name: 'Bữa Sáng 1', price: '$8.99', image: '/images/menu/menu-item-1.png' },
    { id: 2, name: 'Bữa Sáng 2', price: '$8.99', image: '/images/menu/menu-item-2.png' },
    { id: 3, name: 'Bữa Sáng 3', price: '$8.99', image: '/images/menu/menu-item-3.png' },
    { id: 4, name: 'Bữa Sáng 4', price: '$8.99', image: '/images/menu/menu-item-4.png' },
    { id: 5, name: 'Bữa Sáng 5', price: '$8.99', image: '/images/menu/menu-item-5.png' },
    { id: 6, name: 'Bữa Sáng 6', price: '$8.99', image: '/images/menu/menu-item-6.png' },
  ];

  const lunchMenu = [
    { id: 1, name: 'Bữa Trưa 1', price: '$10.99', image: '/images/menu/menu-item-1.png' },
    { id: 2, name: 'Bữa Trưa 2', price: '$10.99', image: '/images/menu/menu-item-2.png' },
    { id: 3, name: 'Bữa Trưa 3', price: '$10.99', image: '/images/menu/menu-item-3.png' },
    { id: 4, name: 'Bữa Trưa 4', price: '$10.99', image: '/images/menu/menu-item-4.png' },
    { id: 5, name: 'Bữa Trưa 5', price: '$10.99', image: '/images/menu/menu-item-5.png' },
    { id: 6, name: 'Bữa Trưa 6', price: '$10.99', image: '/images/menu/menu-item-6.png' },
  ];

  const dinnerMenu = [
    { id: 1, name: 'Bữa Tối 1', price: '$15.99', image: '/images/menu/menu-item-1.png' },
    { id: 2, name: 'Bữa Tối 2', price: '$15.99', image: '/images/menu/menu-item-2.png' },
    { id: 3, name: 'Bữa Tối 3', price: '$15.99', image: '/images/menu/menu-item-3.png' },
    { id: 4, name: 'Bữa Tối 4', price: '$15.99', image: '/images/menu/menu-item-4.png' },
    { id: 5, name: 'Bữa Tối 5', price: '$15.99', image: '/images/menu/menu-item-5.png' },
    { id: 6, name: 'Bữa Tối 6', price: '$15.99', image: '/images/menu/menu-item-6.png' },
  ];

  let currentMenu = [];

  switch (activeMenu) {
    case 'appetizer':
      currentMenu = appetizerMenu;
      break;
    case 'breakfast':
      currentMenu = breakfastMenu;
      break;
    case 'lunch':
      currentMenu = lunchMenu;
      break;
    case 'dinner':
      currentMenu = dinnerMenu;
      break;
    default:
      currentMenu = [];
  }

  return (
    <div style={{marginTop: '30px'}}>
         <div>
         <h2 style={{fontSize: '32px', marginBottom: '20px', textAlign: 'center', color: '#ce1212'}}>Thực Đơn</h2>
          <p className='p custom-font '>thực đơn <span style={{color: '#ce1212'}}>của chúng tôi</span></p>
        </div>
      <div className="button-group flex">
        <button className={activeMenu === 'appetizer' ? 'active' : ''} onClick={() => handleMenuChange('appetizer')}>Khai Vị </button>
        <button className={activeMenu === 'breakfast' ? 'active' : ''} onClick={() => handleMenuChange('breakfast')}>Bữa Sáng</button>
        <button className={activeMenu === 'lunch' ? 'active' : ''} onClick={() => handleMenuChange('lunch')}>Bữa Trưa</button>
        <button className={activeMenu === 'dinner' ? 'active' : ''} onClick={() => handleMenuChange('dinner')}>Bữa Tối</button>
      </div>

      <h2 className='custom1-font'>{activeMenu === 'appetizer' ? 'Thực Đơn Khai Vị' : activeMenu === 'breakfast' ? 'Thực Đơn Bữa Sáng' : activeMenu === 'lunch' ? 'Thực Đơn Bữa Trưa' : 'Thực Đơn Bữa Tối'}</h2>
      <div className="menu-items flex" >
        {currentMenu.map(item => (
          <div key={item.id} className="menu-item" >
            <img src={item.image} alt={item.name} />
            <div>
                <h4>{item.name}</h4>
                <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
