import { Timestamp } from 'firebase/firestore/lite'

export interface PostType {
  data: {
    author: PostAuthorType
    message: string
    timeStamp: Timestamp
  }
  id: string
}
export interface PostAuthorType {
  name: string
  avatarPath: string
  email: string
}
