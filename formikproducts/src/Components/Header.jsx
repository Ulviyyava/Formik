import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <div className="logo">
          <Link className='link1' to ='/'>Products.com</Link>
        </div>
        <div className="navbar">
                <Link className='link2' to = '/add'>AddProduct</Link>
                <Link className='link2' to = '/list'>ProductList</Link>
        </div>
    </div>
  )
}

export default Header