import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import styles from './Feed.module.css'
import { PostType } from '../types'
import NewFeedOption from './NewFeedOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

interface PostProps {
  post: PostType
}
const Post: React.FC<PostProps> = forwardRef(({ post }, ref) => {
  const onPostDelete = async () => {
    await deleteDoc(doc(db, 'posts', post.id))
  }
  return (
    //@ts-ignore
    <div className={styles.post} ref={ref}>
      <div className={styles.post__top}>
        <Avatar src={post.data.author.avatarPath} sx={{ width: '50px', height: '50px' }} />
        <div className={styles.posts__top__details}>
          <h4>{post.data.author.name}</h4>
          <p>{post.data.author.email}</p>
        </div>
      </div>
      <div className={styles.post__text}>
        <p>{post.data.message}</p>
      </div>

      <div className={styles.newFeed_options}>
        <NewFeedOption Icon={ThumbUpIcon} title={'Like'} color={'gray'} />
        <NewFeedOption Icon={CommentIcon} title={'Comment'} color={'gray'} />
        <NewFeedOption Icon={ShareIcon} title={'Share'} color={'gray'} />
        <NewFeedOption Icon={SendIcon} title={'Send'} color={'gray'} />
      </div>

      <div className={`${styles.newFeedOption} ${styles.delete}`}>
        <DeleteIcon onClick={onPostDelete} />
      </div>
    </div>
  )
})

export default Post
