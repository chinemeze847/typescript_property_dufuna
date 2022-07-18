import 'bootstrap/dist/css/bootstrap.min.css';
import './filter.css'


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

              <span className='priceRange'>Range</span>
                <div className='inputContainerTop middleInputContainerTop'>
                    <div className='inputContainers middleInputContainers'>
                        <div className='inputElementLabels'>
                          <span className='priceLabel'>Bathroom</span>
                          <img src='/assets/properties/zero.png' alt=""/>
                        </div>
                        <input type='text' className='inputElement'/>
                        <img src="/assets/properties/arrowdown.svg" alt="" className='arrowDown'/>
                    </div>

                    <div className='inputContainers middleRight middleInputContainers'>
                        <div className='inputElementLabels'>
                          <span className='priceLabel'>Bedroom</span>
                          <img src='/assets/properties/zero.png' alt="" className='inputElement'/>
                        </div>
                        <input type='text' className='inputElement'/>
                        <img src="/assets/properties/arrowdown.svg" alt="" className='arrowDown'/>
                    </div>
                </div>

                <div className='inputContainerTop middleInputContainerTop'>
                    <div className='inputContainers middleInputContainers'>
                        <div className='inputElementLabels'>
                          <span className='priceLabel'>Seating room</span>
                          <img src='/assets/properties/zero.png' alt=""/>
                        </div>
                        <input type='text' className='inputElement'/>
                        <img src="/assets/properties/arrowdown.svg" alt="" className='arrowDown'/>
                    </div>

                    <div className='inputContainers middleRight middleInputContainers'>
                        <div className='inputElementLabels'>
                          <span className='priceLabel'>kitchen</span>
                          <img src='/assets/properties/zero.png' alt="" className='inputElement'/>
                        </div>
                        <input type='text' className='inputElement'/>
                        <img src="/assets/properties/arrowdown.svg" alt="" className='arrowDown'/>
                    </div>
                </div>

                <div className='inputContainerTop middleInputContainerTop'>
                    <div className='inputContainers middleInputContainers'>
                        <div className='inputElementLabels'>
                          <span className='priceLabel'>Toilet</span>
                          <img src='/assets/properties/zero.png' alt=""/>
                        </div>
                        <input type='text' className='inputElement'/>
                        <img src="/assets/properties/arrowdown.svg" alt="" className='arrowDown'/>
                    </div>
                </div>
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
                   show Result
              </div>
           </div>
         </div>

        
      </div>
  )
}

export default Filter