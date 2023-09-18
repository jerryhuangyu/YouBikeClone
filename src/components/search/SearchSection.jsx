import SearchBar from './SearchBar';
import CityDropdown from './CityDropdown';
import ToggleItem from './ToggleItem';
import AreaToggle from './AreaToggle';
import { biking } from '../../assets'

const SearchSection = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-between'>
        <div>
        <h1 className=' text-[24px] font-bold text-green'>站點資訊</h1>
        <div className='flex flex-row'>
            <CityDropdown />
            <SearchBar />
        </div>
        <ToggleItem />
        <AreaToggle />
        </div>
        <div className='h-[400px] flex pr-24 items-end'>
            <img src={biking} alt="ubike bikibg" />
        </div>

    </div>
  )
}

export default SearchSection