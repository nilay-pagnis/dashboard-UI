import React from 'react'
import "./topProducts.css";
import Image from 'next/image';
import pinkdotImg from '../assets/pinkdot.svg'
import greendotImg from '../assets/greendot.svg'
import yellowdotImg from '../assets/yellowdot.svg'
import piechartImg from "../assets/piechart.svg"

const TopProducts = () => {
  return (
    <div product-container>
      <div className='product-wrapper'>
        <h1>Top products</h1>
        <p>May - June 2021 </p>
      </div>
      <div className='piechart-container'>
        <Image src={piechartImg}></Image>

        <div className='products-list'>
          <div className='productName'>
            <Image src={greendotImg} alt='green dot'></Image>
            <div className='product-indo'>
              <h2>Basic Tees</h2>
              <p className='percent'>55%</p>
            </div>
          </div>

          <div className='productName'>
            <Image src={yellowdotImg} alt='green dot'></Image>
            <div className='product-indo'>
              <h2>Custom Short Pants</h2>
              <p className='percent'>31%</p>
            </div>
          </div>
          <div className='productName'>
            <Image src={pinkdotImg} alt='green dot'></Image>
            <div className='product-indo'>
              <h2>Super Hoodies</h2>
              <p className='percent'>14%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;