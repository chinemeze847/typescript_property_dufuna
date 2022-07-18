
import './body.css';
import properties from '../../../models/properties'
import { Property } from '../../../models/models';
import { useState } from 'react';

const Body = () => 
{
  const [ blueColor, setRedColor ] = useState('#0949AA');
  const [ greenColor, setGreenColor ] = useState('#09AA36');

  return (
    <div className='bodyContainer'>
      {properties.map((property : Property) => (

            <div className='properties' key={property.id}>
           
                <div className='propertyImage'>
                    <img src={property.image} alt='' className='imageProp'/>
                </div>

                <div className='propertyLocation'>
                    <span className='location'>{property.address}</span>
                    <span className='PropertyState'>
                      {property.state}
                    </span>
                </div>

                <div className='propertyDistance'>
                  <span>{property.distance}</span>
                </div>
                <div className='propertyIcons'>
                    <span className="IconsAndNums">
                      <img src="/assets/properties/bed.svg" alt="bed"></img>
                      <span className='number'>{property.numOfBedRooms}</span>
                    </span >
                    <span className="IconsAndNums">
                      <img src="/assets/properties/bathub.svg" alt="bed"></img>
                      <span className='number'>{property.numOfBathrooms}</span>
                    </span >
                    <span className="IconsAndNums">
                      <img src='/assets/properties/wc.svg' alt="bed"></img>
                      <span className='number'>{property.numOfToilets}</span>
                    </span>
                </div>
                <div className='propertyPrice'>
                    <span><img src="/assets/properties/naira.png" alt="" className='naira'/>{property.price}</span>
                </div>
                </div>
           ))}
    </div>
  )
}

export default Body