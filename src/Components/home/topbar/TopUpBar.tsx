import './topbar.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Search, Person} from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const TopUpBar = () => {
  return (
    <div className='topbarContainer'>
        <div className='topbarContainerTop'>
            <div className='topLeft'>
                <AcUnitIcon className='starIcon'/>
                <span className='agent'>AGENTLY</span>
            </div>
            <div className='topCenter'>
                <div className="searchBar"> 
                    <span className='rent'>Rent</span>
                    <KeyboardArrowDownIcon className='arrowDownHome'/>
                    <input  placeholder="Where do you want to live ? " className="searchInput"/> 
                    <Search className="searchIcon"/> 
                </div> 
            </div>
            <div className='topRight'>
                <div className= 'topRightContainer'>
                    <span className='ownProperty'>Own a property?</span>
                    <Person className='person'/>
                    <KeyboardArrowDownIcon className='arrowDownHome'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopUpBar