import React, {useState} from 'react';
import './Sidebar.css'
const SidebarSearch = () => {
    const [inp, setInp] = useState('')
    const onChangeHandelr = (e) => {
        setInp(e.target.value)
    }
    return (
       <div className='search__input'>
           <input type="text"  onChange={onChangeHandelr}/>
       </div>
    );
};

export default SidebarSearch;