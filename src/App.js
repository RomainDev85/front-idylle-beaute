import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Home from './pages/Home'
import { NavigationContext } from './context/NavigationContext'
import { FirstLoadingContext } from './context/FirstLoading'

export default function App() {
  const [menu, setMenu] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);

  return (
    <BrowserRouter>
      <FirstLoadingContext.Provider value={{ firstLoading, setFirstLoading }}>
        <NavigationContext.Provider value={{ menu, setMenu }}>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:category" component={Categories} />
              <Redirect to="/"/>
            </Switch>
        </NavigationContext.Provider>
      </FirstLoadingContext.Provider>
    </BrowserRouter>
  )
}

