import React from 'react';
import "./Header.css";
import { Avatar } from '@mui/material';
import { AccessTime, HelpOutline, Search,} from '@mui/icons-material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }] = useStateValue();
  return <div className='header'>
    <div className='header__left'>
        {/* Avatar for logged user */}
        <Avatar className='header__avatar'
            alt={user?.displayName}
            src={user?.photoURL}
        />
        {/* Time acces */}
        <AccessTime/>
    </div>

    <div className='header__search'>
        {/* Search icon */}
        <Search/>
        <input placeholder='Search CrazyCr7'>
        </input>
    </div>

    <div className='header__right'>
        {/* help icon */}
        <HelpOutline/>
    </div>
  </div>;
}

export default Header