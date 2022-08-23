import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {GiPaperCrane} from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () =>  {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt=''></img>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-order'>
        <a href='#order' className='p__opensans'>Order Online</a>
      </div>
      <div className='app__navbar-mobile'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
        <div className='app__navbar-mobile_overlay flex__center slide-bottom'>
          <GiPaperCrane fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

          <ul className='app__navbar-mobile_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
