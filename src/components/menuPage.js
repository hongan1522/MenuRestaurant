import React from 'react';
import BG_Menu from './bgMenu/bgMenu';
import Menu from './menu/menu';
import BG_MenuChef from './bgMenu/bgMenuChef'
import Chefs from './chef/chef';

const MenuPage = () => {
  return (
      <div>
        <BG_Menu/>
        <BG_MenuChef/>
        <Chefs/>
        <Menu/>
      </div>
  )
}

export default MenuPage;
