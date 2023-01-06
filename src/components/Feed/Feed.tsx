import { Avatar, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './Feed.module.css'
import NewFeedOption from './NewFeedOption'
import ImageIcon from '@mui/icons-material/Image'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import ArticleIcon from '@mui/icons-material/Article'
import { PostType } from '../types'
import CreateIcon from '@mui/icons-material/Create'
import Post from './Post'
import { addDoc, collection, orderBy, query, Timestamp } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import OutboxIcon from '@mui/icons-material/Outbox'
import { db } from '../../firebase'
import { useOwnSelector } from '../..'
import FlipMove from 'react-flip-move'

interface FeedProps {}
const Feed: React.FC<FeedProps> = () => {
  const user = useOwnSelector((state) => state.userReducer.user)
  // Need to check how to use firebase with ts
  const [posts, setPosts] = useState<PostType[]>([])
  const [postText, setPostText] = useState('')

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timeStamp', 'desc')),
      (snapshot) => {
        const postsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        setPosts(postsList as PostType[])
      },
    )
    return () => {
      unsubscribe()
    }
  }, [])

  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      author: {
        name: user?.name,
        avatarPath: user?.avatarPath,
        email: user?.email,
      },
      message: postText,
      timeStamp: Timestamp.now(),
    })
    setPostText('')
  }

  return (
    <div className={styles.feed}>
      <div className={styles.feed__newFeed}>
        <div className={styles.newFeed_top}>
          <Avatar sx={{ width: '50px', height: '50px' }} src={user?.avatarPath} />
          <div className={styles.newFeed_button}>
            <CreateIcon />
            <input
              type="text"
              placeholder="New publication"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <button onClick={createPost}>
              <OutboxIcon />
            </button>
          </div>
        </div>
        <div className={styles.newFeed_options}>
          <NewFeedOption Icon={ImageIcon} title={'Photo'} color={'#70B5F9'} />
          <NewFeedOption Icon={YouTubeIcon} title={'Video'} color={'#5F9B41'} />
          <NewFeedOption Icon={EventAvailableIcon} title={'Event'} color={'#C37D16'} />
          <NewFeedOption Icon={ArticleIcon} title={'Write an article'} color={'#E16745'} />
        </div>
      </div>

      <Divider sx={{ width: '100%' }} />

      <div className={styles.feed__posts}>
        <FlipMove>
          {posts?.map((post: PostType) => (
            <Post post={post} key={post.id} />
          ))}
        </FlipMove>
      </div>
    </div>
  )
}

export default Feed
