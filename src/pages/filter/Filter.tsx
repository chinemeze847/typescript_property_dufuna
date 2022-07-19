import 'bootstrap/dist/css/bootstrap.min.css';
import Room from '../../Components/filter/Room';
import './filter.css'
import { Link } from 'react-router-dom'


const Filter = () => {
  return (
      <div className='filterContainer'>
         <div className='top'>
             <img src="/assets/properties/cancel.svg" alt="" className='cancelIcon'/>
             <span className='filter'>Filter</span>
         </div>

         <div className='middle'>

            <div className='middleTop'>
              <span className='priceRange'>Price Range</span>
              <div className='inputContainerTop'>
                  <div className='inputContainers'>
                      <div className='inputElementLabels'>
                        <span className='priceLabel'>min price</span>
                        <img src='/assets/properties/onaira.png' alt=""/>
                      </div>
                      <input type='text' className='inputElement'/>
                  </div>

                  <div className='inputContainers inputContainersRight'>
                      <div className='inputElementLabels'>
                        <span className='priceLabel'>max price</span>
                        <img src='/assets/properties/onaira.png' alt="" className='inputElement'/>
                      </div>
                      <input type='text' className='inputElement'/>
                  </div>
              </div>
            </div>

            <hr/>
            <div className='middleBottom'>
              <Room/>
            </div>
         </div>

         <hr className='horizontal'/>

         <div className='bottom'>
           <div className='bottomTop'>
              <span className='priceRange'>Condition</span>
           </div>

          <hr/>

           <div className='bottomDown'>
              <a href="self">Clear all</a>
              <div className='showResult'>
                <Link to='/' className='myLink'>
                   show Result
                </Link>
              </div>
           </div>
         </div>

        
      </div>
  )
}

export default Filter