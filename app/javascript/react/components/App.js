import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditUserDetails from './users/EditUser'
import UserIndex from './users/UserIndex'
import UserShowContainer from './users/UserShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UserIndex} />
        <Route exact path="/users/editprofile" component={EditUserDetails} />
        <Route exact path="/users/:username" component={UserShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
