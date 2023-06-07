import Image from 'next/image'
import React from 'react'
import notification from "../assets/icons8-notification-bell-48.png";
import search from "../assets/icons8-search-48.png";
import profile from "../assets/istockphoto.jpg";
import "../components/navbar.css"

const Navbar = () => {
  return (
    <div className='nav-conatiner'>
      <div className='nav-wrapper'>
        <h1 className='nav-link'>Dshboard</h1>

        <div className='nav-func'>
          <div className='search-nav'>
            <input
              className='search-input'
              type='text'
              placeholder='Search...'
            ></input>
            <Image className='search-img' src={search}></Image>
            <Image className='notification-bell' src={notification}></Image>
            <div className='profile-img'>
              <button className='profile-btn'>
                <Image src={profile} alt='profile-image'></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar