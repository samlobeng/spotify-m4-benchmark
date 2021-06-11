import React from 'react'
import HomePage from './HomePage'
import { Switch, Route } from 'react-router-dom'
import Artist from './Album'

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/artist/" component={Artist}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default Main
