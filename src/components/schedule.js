import React from 'react'
import "./schedule.css";
import Image from 'next/image';
import greenlineImg from "../assets/greenline.svg"
import purplelineImg from "../assets/purpleline.svg"

const Schedule = () => {
  return (
    <div className='schedule-container'>
      <div className='schedule-wrapper'>
        <h1>Today’s schedule</h1>
        <p>See All</p>
      </div>
      <div className='schedule-info'>
        <Image src={greenlineImg}></Image>
        <div className='schedule-details'>
          <p>Meeting with suppliers from Kuta Bali</p>
          <p className='time'>14.00-15.00</p>
          <p className='address'>at Sunset Road, Kuta, Bali </p>
        </div>
      </div>
      <div className='schedule-info'>
        <Image src={purplelineImg}></Image>
        <div className='schedule-details'>
          <p>Check operation at Giga Factory 1</p>
          <p className='time'>18.00-20.00</p>
          <p className='address'>at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule