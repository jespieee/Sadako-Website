import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={ images.slidingdoors } alt="sliding doors"/>
    </div>

    <div className='app__aboutus-content flex__center'>
      
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>about us text description here</p>
        <button type='button' className='custom__button'>View Menu</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>history text description here</p>
        <button type='button' className='custom__button'>Order Online</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
