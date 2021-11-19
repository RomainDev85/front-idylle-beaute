import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Home from './pages/Home'
import { NavigationContext } from './context/NavigationContext'
import { FirstLoadingContext } from './context/FirstLoading'
import { ScrollSectionContext } from './context/ScrollSectionContext'
import Menu from './components/Menu'

export default function App() {
  const [menu, setMenu] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [ scrollSection, setScrollSection ] = useState(null);

  return (
    <BrowserRouter>
      <FirstLoadingContext.Provider value={{ firstLoading, setFirstLoading }}>
        <ScrollSectionContext.Provider value={{ scrollSection, setScrollSection }}>
          <NavigationContext.Provider value={{ menu, setMenu }}>
            <Navbar/>
            {
              menu ? 
              <Menu />
              :
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:category" component={Categories} />
                <Redirect to="/"/>
              </Switch>
            }
              
          </NavigationContext.Provider>
        </ScrollSectionContext.Provider>
      </FirstLoadingContext.Provider>
    </BrowserRouter>
  )
}

