import { Link } from 'react-router-dom'
import './typeofproperty.css'

const TypeOfProperty = () => {
  return (
    <div className='typeContainer'>
        <div className='leftContainer'>
            <img src='/assets/properties/person.svg' alt='' className='family'/>
        </div>

        <div className='rightContainer'>
            <div className='rightContainerTop'>
                <div className='starDiv'><img src='/assets/properties/cancel.svg' alt=''className='starIc' /></div>
                <div className='whatProp'>What type of Property ?</div>

                <div className='propertyTypes'>
                    <div className='propertyType propertyType1'>
                        <span className='propertyLabel'>House</span>
                        <img src='/assets/properties/img1.png' alt='' className='imageItem'/>
                    </div>
                    <div className='propertyType'>
                        <span className='propertyLabel'>Apartment</span>
                        <img src='/assets/properties/img2.png' alt='' className='imageItem'/>
                    </div>
                    <div className='propertyType'>
                        <span className='propertyLabel'>Land</span>
                        <img src='/assets/properties/img3.png' alt='' className='imageItem'/>
                    </div>
                </div>
                <div className='propertyTypes'>

                    <div className='propertyType propertyType1'>
                        <span className='propertyLabel'>Warehouse</span>
                        <img src='/assets/properties/img4.png' alt='' className='imageItem'/>
                    </div>
                    <div className='propertyType'>
                        <span className='propertyLabel'>Miniflat</span>
                        <img src='/assets/properties/img5.png' alt='' className='imageItem'/>
                    </div>
                    <div className='propertyType'>
                        <span className='propertyLabel'>Office space</span>
                        <img src='/assets/properties/img6.png' alt='' className='imageItem'/>
                    </div>

                </div>
            </div>

            <hr/>

            <div className='rightContainerCenter'>
                <div className='propertyAs'>List Property as ?</div>
                <div className='propertyAsList'>
                    <div className='propertyAsBox'>
                        <span className='purchaseType'>Rental</span>
                        <span className='statement'>
                            A rented place within a multi-unit
                            residential building or complex.
                        </span>
                    </div>
                    <div className='propertyAsBox'>
                        <span className='purchaseType'>Purchase</span>
                        <span className='statement'>
                            A rented place within a multi-unit
                            residential building or complex.
                        </span>
                    </div>
                    <div className='propertyAsBox'>
                        <span className='purchaseType'>Lease</span>
                        <span className='statement'>
                            A rented place within a multi-unit
                            residential building or complex.
                        </span>
                    </div>
                </div>
            </div>

            <hr/>

            <div className='rightContainerBottom'>
                <span className='back'><Link to='/detail'>Back</Link></span>
                <div className='next '><Link to='/address' className='myLink'>Next</Link></div>
            </div>
        </div>
    </div>
  )
}

export default TypeOfProperty