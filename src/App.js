import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Categories} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
