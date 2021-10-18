import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { NavigationContext } from './context/NavigationContext'

export default function App() {

  const [menu, setMenu] = useState(false)

  return (
    <BrowserRouter>
      <NavigationContext.Provider value={{ menu, setMenu }}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/:category" component={Categories} />
          <Redirect to="/"/>
        </Switch>
      </NavigationContext.Provider>
    </BrowserRouter>
  )
}

