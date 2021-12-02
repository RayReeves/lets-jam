import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserIndex from './users/UserIndex'
import UserShowContainer from './users/UserShowContainer'
import UserSearch from './search/SearchIndex'
import ChatContainer from './chat/ChatContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UserIndex} />
        <Route exact path="/search" component={UserSearch} />
        <Route exact path="/users/:id" component={UserShowContainer} />
        <Route exact path="/chats" component={ChatContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
