import '../propertytype/typeofproperty.css'
import './addphotos.css'
import { Link } from 'react-router-dom'

const AddPhotos = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer rightOwnerContainer'>
            <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>

            <div className='photosContainer'>
                <div className='displayDiv'>
                    <img src='/assets/properties/photos.png' alt="" className='photosImg'/>
                    <img src='/assets/properties/add5.png' alt="" className='add5'/>
                    <div className='upload'><a href='self'>Upload from your device</a></div>
                </div>
            </div>
            <hr className='uploadHorizon'/>
            <div className='rightContainerBottom ownerContainerBottom'>
                <span className='back '><Link to='/owner'>Back</Link></span>
                <div className='next nextUpload'><Link to='/upload' className='myLink'>Next</Link></div>
            </div>
       </div>
    </div>
  )
}

export default AddPhotos