import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-40 sm:w-60 md:w-80 flex items-center bg-slate-100 rounded-md">
    <input 
    type="text" 
    placeholder="Search Notes..."
    className="w-full text-xs bg-transparent py-[11px] outline-none"
    value={value}
    onChange={onChange} />


{ value && (<IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" onClick={onClearSearch}/>)}

{/* Insert a search icon from react icons. */}
    <FaMagnifyingGlass 
        className="text-slate-500 text-xl cursor-pointer hover:text-black mr-3"
        onClick={handleSearch} />
    
    </div>
  )
}

export default SearchBar;