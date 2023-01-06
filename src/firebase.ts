import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAi6BlDHHxDvCteQSrwdtObmBVlSKuslPA',
  authDomain: 'linkedin-copy-2d330.firebaseapp.com',
  projectId: 'linkedin-copy-2d330',
  storageBucket: 'linkedin-copy-2d330.appspot.com',
  messagingSenderId: '302311365223',
  appId: '1:302311365223:web:eb8d441f901fb6aefd12c2',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
