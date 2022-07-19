import '../propertytype/typeofproperty.css'
import '../filter/filter.css'
import './owner.css'
import { Link } from 'react-router-dom'

const Owner = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer rightOwnerContainer'>
            <div className='rightContainerTop'>
                <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>
                <div className='whatProp'>Property Owner</div>
                
                <div className='addressLocation'>
                    <input type='text' placeholder='IJT Realtor' className='ownerInput'/>
                </div>
            </div>

            <hr/>

            <div className='rightContainerCenter'>
                <div className='descriptionLabel priceRange'>Description</div>
                <div className="despcriptionDiv">
                   <input type='text' placeholder='what do you have in mind ?'  className="descpInput"/>
                </div>
            </div>

            <hr/>

            <div>
              <div className='validationLabel priceRange'>Validation</div>
              <div className='inputContainerTop'>
                  <div className='inputContainers inputValidContainers'>
                      <div className='inputElementLabels inputValidLabels'>
                        <span className='priceLabel'>From</span>
                        <img src='/assets/properties/from.png' alt=""/>
                      </div>
                      <input type='text' className='inputElement'/>
                  </div>

                  <div className='inputContainers inputContainersRight inputValidContainers'>
                      <div className='inputElementLabels'>
                        <span className='priceLabel'>To</span>
                        <img src='/assets/properties/to.png' alt="" className='inputElement'/>
                      </div>
                      <input type='text' className='inputElement'/>
                  </div>
              </div>
            </div>

            <div className='rightContainerBottom ownerContainerBottom'>
                <span className='back'><Link to='/address'>Back</Link></span>
                <div className='next myLink'><Link to='/addphotos' className='myLink'>Next</Link></div>
            </div>
       </div>
    </div>
  )
}

export default Owner