import React from 'react'
import styles from './Header.module.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useOwnSelector } from '../..'

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const user = useOwnSelector((state) => state.userReducer.user)

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.headerIcon}>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        </div>
        <div className={styles.headerSearch}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.header__right}>
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="" avatarPath={user?.avatarPath} avatarNeed={true} />
      </div>
    </div>
  )
}

export default Header
