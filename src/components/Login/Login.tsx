import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import styles from './Login.module.css'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { useOwnDispatch } from '../..'
import { login } from '../../redux/userSlice'

const Login = () => {
  const [fullName, setFullName] = useState('')
  const [avatarPath, setAvatarPath] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useOwnDispatch()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is logged in
        dispatch(
          login({
            name: user.displayName as string,
            avatarPath: user.photoURL as string,
            email: user.email as string,
          }),
        )
      }
    })
    return () => {
      unsub()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      dispatch(
        login({
          name: user.displayName as string,
          avatarPath: user.photoURL as string,
          email: user.email as string,
        }),
      )
    })
  }
  const registerHandler = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      updateProfile(auth.currentUser as User, {
        displayName: fullName,
        photoURL: avatarPath,
      }).then(() => {
        dispatch(
          login({
            name: user.displayName as string,
            avatarPath: user.photoURL as string,
            email: user.email as string,
          }),
        )
      })
    })
  }
  return (
    <div className={styles.login}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png"
        alt="logo"
      />
      <div className={styles.login__input}>
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className={styles.login__input}>
        <input
          type="text"
          placeholder="Avatar path"
          value={avatarPath}
          onChange={(e) => setAvatarPath(e.target.value)}
        />
      </div>
      <div className={styles.login__input}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.login__input}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.login__button}>
        <button onClick={loginHandler}>Sign up</button>
      </div>
      <div>
        <span>Not registered?&nbsp;&nbsp;</span>
        <span className={styles.login__reg} onClick={registerHandler}>
          Register now
        </span>
      </div>
    </div>
  )
}

export default Login
