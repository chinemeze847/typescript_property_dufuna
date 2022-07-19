import './upload.css'
import { Link } from 'react-router-dom'

const Upload = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer '>
            <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>

            <div className='uploadCenterContainer'>
                <div className="firstDiv">
                    <span className='add5Label'>Add At least 5 Images</span>
                    <span className="leftSide">Upload<img src='/assets/properties/uploadIcon.png' alt=''className='starIc' /></span>
                </div>

                <div className="upload1Div">
                   <img src='/assets/properties/upload1.png' alt=''className='upload1' />
                </div>
                <div className="upload2Div">
                   <img src='/assets/properties/upload2.png' alt='' className='upload2' />
                   <img src='/assets/properties/upload2.png' alt='' className='upload2' />
                </div>

            </div>
           
            <hr className='uploadHorizon finishHorizon'/>
            <div className='rightContainerBottom ownerContainerBottom'>
                <span className='back '><Link to='/address'>Back</Link></span>
                <div className='next '>Finish</div>
            </div>
       </div>
    </div>
  )
}

export default Upload