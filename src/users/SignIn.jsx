import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, signIn } from '../store/user';

const SignIn = () => {
  let dispatch = useDispatch();

  let user = useSelector(state => state.user.userInfo)

  let doSignIn = () => {
    dispatch(
      signIn({
        email: "prieba@email.com",
        jwToken: "fdsfsdffdfhr"
      })
    )
  }

  let doLogOut = () => {
    dispatch(
      logOut()
    )
  }

  return (
    <div>
      {
        user ? <button onClick={doLogOut}>Logout</button> : <button onClick={doSignIn}>SignIn</button>
      }
    </div>
  )
}

export default SignIn