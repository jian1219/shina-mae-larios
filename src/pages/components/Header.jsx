import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import petlogo from "../../icons/pets.png";
import menuIcons from "../../icons/menu (1).png";
import menuIcons2 from "../../icons/menu (2).png";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <div className='flow-header'>
        <div className='flex items-center gap-3'>
          <img className='w-[35px]' src={petlogo} alt="" />
          <h1 className='text-[18px] text-white font-semibold'>Miming</h1>
        </div>
        <div className='flex gap-4 text-[13px] font-medium'>
          <button onClick={() => navigate('/flow2')}>Home</button>
          <button onClick={() => navigate('/infoAbout')}>About</button>
          <button onClick={toggleMenu}>
            <img className='w-[25px]' src={isMenuVisible ? menuIcons2 : menuIcons} alt="" />
          </button>
        </div>
      </div>
      <div>
        {isMenuVisible && (
          <div className='menu-dropdown '>
            <ul>
              <button onClick={() => navigate('/images')}>Images</button>
              <button onClick={() => navigate('/survey')}>Simple Questions</button>
              <button onClick={() => navigate('/christmasTree')}>Christmas Tree</button>
              <button onClick={() => navigate('/chess')}>Chess</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
              <button onClick={() => navigate('/creator')}>Soon</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
