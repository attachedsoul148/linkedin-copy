import Avatar from '@mui/material/Avatar'
import React from 'react'
import styles from './Recommendations.module.css'

interface RecoOptionProps {
  title: string
  subtext: string
  avatarPath: string
}
const RecoOption: React.FC<RecoOptionProps> = ({ title, subtext, avatarPath }) => {
  return (
    <div className={styles.recoOption}>
      <div className={styles.recoOption__right}>
        <Avatar src={avatarPath} sx={{ width: 50, height: 50 }} />
        <div className={styles.recoOption__subtext}>
          <h4>{title}</h4>
          <p>{subtext}</p>
        </div>
      </div>

      <div className={styles.recommendations__btn}>
        <button>Follow+</button>
      </div>
    </div>
  )
}

export default RecoOption
