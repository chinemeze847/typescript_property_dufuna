import './detail.css'
import TopUpBar from '../../Components/home/topbar/TopUpBar'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Share from '@mui/icons-material/Share';
import FooterBottom from '../../Components/home/footer/FooterBottom';


const Detail = () => {
  return (
    <div className='detailContainer'>
       <div className='topDetailContainer'>
            <TopUpBar/>
       </div>

       <div className='detailTopCentral'>
          <div className='topCentralLeft'>
             <span className='ikoyi'>3 bedroom Apartment at Ikoyi</span>
             <div className='topCentralLeftBottom'>
                <span className="propertyLocate">Lagos, NG</span>
                <span className='newLabel'>New</span>
             </div>
          </div>

          <div className="topCentralRight">
               <span className='topCentralRightItems desc'><a href='#'>Description</a></span>
               <span className='topCentralRightItems'>Map view</span>
          </div>
       </div>

       <div className='detailBodyContainer'>
          <div className='bodyContainerLeft'>
             <img src="/assets/properties/detailpic2.png" className='detailImg' alt=''/>
          </div>
          <div className='bodyContainerRight'>
              <div className='bodyRightTop'>
                    <span>Owned By :</span>
                    <span><a href='self' className='realLink'>IJT Realtor</a></span>
              </div>

              <hr/>

              <div className='bodyRightMiddle'>
                   <div className='bodyRightMiddleTop'>
                      <div className='numOfPropertyItems'>
                          <img src='/assets/properties/bed1.svg' alt='' />
                          <span className='rooms'>BedRoom (3)</span>
                      </div>
                      <div className='numOfPropertyItems'>
                          <img src='/assets/properties/bath1.svg' alt='' />
                          <span className='rooms'>BathRoom (3)</span>
                      </div>
                      <div className='numOfPropertyItems'>
                          <img src='/assets/properties/seat1.svg' alt='' />
                          <span className='rooms'>Seating Room (3)</span>
                      </div>
                   </div>
                   <div className='bodyRightMiddleBottom'>
                      <div className='numOfPropertyItems'>
                              <img src='/assets/properties/kitch1.svg' alt='' />
                              <span className='rooms'>Kitchen (3)</span>
                          </div>
                          <div className='numOfPropertyItems'>
                              <img src='/assets/properties/toil1.svg' alt='' />
                              <span className='rooms'>Toilet (3)</span>
                        </div>
                   </div>

              </div>

              <hr/>

              <div className='bodyRightBottom'>
                  <p>
                  3 bedroom House for sale at Ikoyi The Local Government Council
                   Headquarters Lagos Imo selling for ₦30,000,000. See property details 
                   on Agently or browse all our range of properties in Ikoyi 3 bedroom House 
                   for sale in Ikoyi Buy 3 bedroom House for sale All Ensuite 4 Bedroom Detached 
                   Bungalow in Ikoyi is a House.
                  </p>
                  <span className='showMore'><a href='self'>Show more</a></span>
                  <img src='/assets/properties/greater.svg' alt='' className='angleGreater'/>
              </div>

              <div className='lastBottomRight'>
                <div className='buyNow'>Buy now: N30,000,000</div>
                <div  className='star'><AcUnitIcon/></div>
                <div className='share'> <Share /></div>
              </div>
          </div>

       </div>
       
       <FooterBottom/>
    </div>
  )
}

export default Detail