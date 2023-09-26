import React from 'react'
import "../index.css"

const Header = () => {
  return (
    <div className='bg flex'>
        <div className='burger-menu'>
            <div className='line-box'></div>
            <div className='line-box'></div>
            <div className='line-box'></div>
        </div>
        <header>
        
        <div className='header-items flex'>
            <div className='logo'>
                <img src="/images/EA_logo.svg" alt='logo'/>
            </div>
            <input className='input-box' placeholder='Search'/>
            <div className='profile flex'>
                <div className='icon'><img src="/images/user_icon.svg" alt='logo'/></div>
                <div className='greeting'>
                    <div className='sm'>Hello,</div>
                    <div className='bold'>lorem ispsum dolor</div>
                </div>
            </div>
        </div>
    </header>
    </div>

  )
}

export default Header