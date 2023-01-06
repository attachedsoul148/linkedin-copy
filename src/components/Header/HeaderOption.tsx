import { Avatar } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useOwnDispatch } from '../..'
import { auth } from '../../firebase'
import { logout } from '../../redux/userSlice'
import styles from './Header.module.css'

interface HeaderOptionProps {
  Icon?: React.FC
  avatarPath?: string
  title: string
  avatarNeed?: boolean
}
const HeaderOption: React.FC<HeaderOptionProps> = ({ Icon, avatarPath, title, avatarNeed }) => {
  const dispatch = useOwnDispatch()
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon />}
      {avatarNeed && (
        <Avatar
          alt="avatar"
          src={avatarPath}
          onClick={() => {
            signOut(auth).then(() => {
              dispatch(logout())
            })
          }}
        />
      )}
      {title}
    </div>
  )
}

export default HeaderOption
