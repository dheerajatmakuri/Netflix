import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/cards/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
