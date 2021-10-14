import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Menu from './pages/Menu'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Categories} />
        <Route path="/menu" exact component={Menu} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  )
}
