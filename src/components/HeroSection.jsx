import React from 'react'
import '../App.css'

const HeroSection = () => {
  return (

    <main className='hero container'>
      <div className='hero-content'>
        <h1>YOUR FEE DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE VEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESRVE THE BEST AD WE'RE HERE TO HELP WITH OUR SHOES.</p>
        <div className="">
          <button className='hero-btn'>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="./images/flipkart.png" alt="" />
            <img src="./images/amazon.png" alt="" />
          </div>
        </div>

      </div>

      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="" />

      </div>
    </main>
  )
}

export default HeroSection;