import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'; 
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Our Menus'/>
      <h1 className='headtext__cormorand'>Our Menus</h1>
    </div>

    <div className='app__specialMenu_menu'>
      <div className='app__specialMenu_menu-sushi flex__center'>
        <p className='app__specialMenu_menu-heading'>Rolls, Nigiri, and Sashimi</p>
        <div className='app__specialMenu_menu-items'>

        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
