import React from 'react'
import styles from './Sidebar.module.css'
import { Avatar } from '@mui/material'
import { useOwnSelector } from '../..'

interface SidebarProps {}
const recentItem = (tag: string) => {
  return (
    <div className={styles.recentItem}>
      <p className={styles.hash}>#</p>
      <p>{tag}</p>
    </div>
  )
}
const Sidebar: React.FC<SidebarProps> = () => {
  const user = useOwnSelector((state) => state.userReducer.user)

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="https://wallpaperaccess.com/full/1153716.jpg" alt="bg" />
        <Avatar
          sx={{ width: '70px', height: '70px', marginBottom: '20px' }}
          src={user?.avatarPath}
        />
        <h3>{user?.name}</h3>
        <h4>{user?.email}</h4>
      </div>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Who viewed you</p>
          <span className={styles.statNumber}>2,543</span>
        </div>
        <div className={styles.sidebar__stat}>
          <p>Views on posts</p>
          <span className={styles.statNumber}>2,448</span>
        </div>
      </div>

      <div className={styles.sidebar__bottom}>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        {recentItem('rinniecoleman')}
        {recentItem('mrolympia')}
        {recentItem('jaycutler')}
        {recentItem('arnoldschwarzenegger')}
      </div>
    </div>
  )
}

export default Sidebar
