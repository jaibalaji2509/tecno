import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'

const ProtectedRoute = ({component: Component, ...rest}) => (
  <AuthConsumer>
    {({isAuth}) => (
      <Route
        render={props => {
          console.log('Auth', isAuth)
          return isAuth ? <Component {...props} /> : <Redirect to="/login"/>
        }}
        {...rest}
      />
    )}
  </AuthConsumer>
)
export default ProtectedRoute
