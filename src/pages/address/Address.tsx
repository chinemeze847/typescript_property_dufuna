import './address.css'
import '../filter/filter.css'
import '../propertytype/typeofproperty.css'
import Room from '../../Components/filter/Room';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer'>
                <div className='rightContainerTop addressTopRight'>
                    <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>
                    <div className='whatProp'>Property Address ?</div>
                    
                    <div className='addressLocation'>
                            <input type='text' placeholder="Enter an address here" className='inputLocation'/>
                            <LocationOnIcon className='locationIcon'/>
                    </div> 
                </div>
            <hr/>

            <div className='rightContainerCenter addressTopCenter'>
                <Room/>
            </div>
            <hr className='addresshorizon'/>
            <div className='rightContainerBottom address'>
            <span className='back'><Link to='/propertytype'>Back</Link></span>
            <div className='next myLink'><Link to='/owner' className='myLink'>Next</Link></div>
            </div>
       </div>
    </div>
  
  )
}

export default Address