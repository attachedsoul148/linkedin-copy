import React from 'react'
import { useOwnSelector } from '.'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Recommendations/Recommendations'
function App() {
  const user = useOwnSelector((state) => state.userReducer.user)
  return (
    <div className="app">
      <Header />

      {user ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
