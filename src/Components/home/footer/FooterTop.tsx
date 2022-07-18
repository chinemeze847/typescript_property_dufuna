import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FooterTop = () => {
  return (
    <div className='footerTop'>
        <ChevronLeftIcon  className='angleIcons'/>
          <ul>
            <li className='one'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
          <ChevronRightIcon  className='angleIcons'/>
    </div>
  )
}

export default FooterTop