import React from 'react'
import ImageIcon from '@mui/icons-material/Image'
import styles from './Feed.module.css'

interface NewFeedOptionProps {
  Icon: typeof ImageIcon
  title: string
  color: string
}
const NewFeedOption: React.FC<NewFeedOptionProps> = ({ Icon, title, color }) => {
  return (
    <div className={styles.newFeedOption}>
      <Icon sx={{ color: color }} />
      {title}
    </div>
  )
}

export default NewFeedOption
