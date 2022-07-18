import './topbar.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopUpBar from './TopUpBar'

const TopBar = () => {
  return (
    <div className='topbarContainer'>

        <TopUpBar/>

        <div className='topbarContainerNav'>
            <div className='navLeft'>
                <ul>
                    <li>House</li>
                    <li>Office Space</li>
                    <li>Flats and Apartments</li>
                    <li>Lands</li>
                    <li>Semi Detached Bungalow</li>
                    <li>Semi Detached Duplex</li>
                    <li>Ware house</li>
                    <li>Mini Flat</li>
                    <li>Shop in Mall</li>
                </ul>
             </div>
             <div className='navRight'>
                <ChevronRightIcon className="angle"/>
                  <Link to="/filter">
                        <div className='filterElements'>
                            <FilterAltIcon className='filterIcon'/>
                            <span className='filterLabel'>Filters</span>
                        </div>
                    </Link>
             </div>
        </div>

    </div>
  )
}

export default TopBar