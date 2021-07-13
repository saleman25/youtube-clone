import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState('');



    return (
        <div className='header'>

            <div className='header_left'>
            <MenuIcon />
            <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' alt=''></img>
            </div>

            <div className='header_input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'></input>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header_inputButton'/>
            </Link>
            </div>

            <div className='header_right'>
            <VideoCallIcon className='header_icon'/>
            <AppsIcon className='header_icon' />
            <NotificationsIcon className='header_icon' />
            <Avatar 
                alt='Samantha Aleman'
                src='https://miro.medium.com/fit/c/1360/1360/1*iAlRONMxUYg-5fvbGVtmHw.jpeg'
            />
            </div>

        </div>
    )
}

export default Header
