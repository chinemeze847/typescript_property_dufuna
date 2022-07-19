import React from 'react'

const Room = () => {
  return (
    <div>
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
  )
}

export default Room