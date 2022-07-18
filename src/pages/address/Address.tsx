
import '../propertytype/typeofproperty.css'

const Address = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer'>
            <div className='rightContainerTop'>
                <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>
                <div className='whatProp'>Property Address ?</div>
                
                <div className='addressLocation'>

                </div>
                
            </div>

            <hr/>

            <div className='rightContainerCenter'>
                
            </div>

            <hr/>

            <div className='rightContainerBottom'>
                <span className='back'><a href='self'>Back</a></span>
                <div className='next'>Next</div>
            </div>
       </div>
    </div>
  
  )
}

export default Address