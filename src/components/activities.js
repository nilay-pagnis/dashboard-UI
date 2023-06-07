import Image from 'next/image';
import React from 'react'
import pinkdotImg from '../assets/pinkdot.svg'
import greendotImg from '../assets/greendot.svg'
import graphImg from '../assets/graph.svg'
import "./activities.css";


const Activities = () => {
  return (
    <div className='activity-container'>
      <h1 className='heading'>Activities</h1>
      <div className='search-date'>
        <p>May - June 2021 </p>
        <div className='graph-info'>
          <div className='graph-info-container'>
            <div className='guest'>
              <Image src={pinkdotImg} alt='pink dot'></Image>
              <p>Guest</p>
            </div>
            <div className='user'>
              <Image src={greendotImg} alt='green dot'></Image>
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
      <Image className='graph-img' src={graphImg} alt='graph-img'></Image>
    </div>
  );
}

export default Activities;