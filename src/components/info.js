import React from 'react'
import Image from "next/image";
import "./info.css";
import revenueImg from "../assets/revenue.svg"
import tagImg from "../assets/tag.svg"
import likeImg from "../assets/likeBtn.svg"
import userImg from "../assets/user.svg"


const Info = () => {
  return (
    <div className='info-container'>
      <div className='total-revenues'>
        <Image src={revenueImg} alt='revenue-img'></Image>
        <br />
        <p>Total Revenues</p>
        <h1>$2,129,430</h1>
      </div>

      <div className='total-revenues' style={{ background: "#F4ECDD" }}>
        <Image src={tagImg} alt='revenue-img'></Image>
        <br />
        <p>Total Transactions</p>
        <h1>1,520</h1>
      </div>

      <div className='total-revenues' style={{ background: "#EFDADA" }}>
        <Image src={likeImg} alt='revenue-img'></Image>
        <br />
        <p>Total Likes</p>
        <h1>9,721</h1>
      </div>

      <div className='total-revenues' style={{ background: "#DEE0EF" }}>
        <Image src={userImg} alt='revenue-img'></Image>
        <br />
        <p>Total Users</p>
        <h1>892</h1>
      </div>
    </div>
  );
}

export default Info