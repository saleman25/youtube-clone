import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
            <MenuIcon />
            <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' alt=''></img>
            </div>

            <div className='header_input'>
            <input placeholder='Search' type='text'></input>
            <SearchIcon className='header_inputButton'/>
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
