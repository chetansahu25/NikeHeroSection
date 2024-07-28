import React from 'react'

const NavNike = () => {
  return (
    <>
      <div>
        <div className="spacer"></div>
        <nav className='container'>
          <div className="logo">
            <img src="./images/brand_logo.png" alt="" />
          </div>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Products</li>
          </ul>
          <button className='' id='login'>Login</button>
        </nav>
      </div>
    </>
  )
}

export default NavNike;