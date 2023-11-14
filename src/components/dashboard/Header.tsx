import React from 'react'
import '../../styles/dashboard.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import LongMenu from './Menu';
import Badge from '@mui/material/Badge';

const Header = () => {
  return (
    <header className='dashboard_header'>
        <div style={{flex: 1, paddingLeft: '20px'}}>
            <img src='/icons/header_logo.png'/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', paddingRight: '20px', gap: 25}}>
            <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon sx={{color: '#8b8b8b', fontSize: '20px'}}/>
            </Badge>
            <SearchIcon sx={{color: '#8b8b8b'}}/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Avatar sx={{ bgcolor: deepOrange[500], fontSize: '14px', width: '35px', height: '35px', marginRight: 0.5}}>AB</Avatar>
                <LongMenu/>
            </div>
        </div>
    </header>
  )
}

export default Header;