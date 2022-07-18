import React from 'react'

const FooterBottom = () => {
  return (
    <div className='footerBottom'>
       <div className='footerBottomLeft'>
            <ul>
                <li><img src='/assets/properties/agently.svg' alt="agently"/></li>
                <li>. Privacy</li>
                <li>. Terms</li>
                <li>. Sitemap</li>
                <li>. Destinations</li>
            </ul>
        </div>
        <div className='footerBottomRight'>
             <ul>
                <li><img src='/assets/properties/world.svg' alt="world" /></li>
                <li>English(US)</li>
             </ul>
        </div>
    </div>

  )
}

export default FooterBottom