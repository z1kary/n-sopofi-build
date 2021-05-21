import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from '../NavigationBar/Navbar'
import Homepage from '../../pages/Homepage'
import Videos from '../../pages/Videos'
import Watch from '../../pages/Watch'
import Music from '../../pages/Music'
import Meditation from '../../pages/Meditation'
import Channel from '../../pages/Channel'
import Settings from '../../pages/Settings/index'
import DashboardHome from '../../pages/Dashboard/Home'
import DashboardVideo from '../../pages/Dashboard/Video'
import Explore from '../../pages/Explore'
import Logout from '../NavigationBar/Logout'

const index = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/videos' component={Videos} />
        <Route path='/watch/' component={Watch} />
        <Route path='/music' component={Music} />
        <Route path='/logout' component={Logout} />
        <Route path='/meditation' component={Meditation} />
        <Route path='/explore' component={Explore} />
        <Route path='/settings' component={Settings} />
        <Route exact path='/dashboard/:username/home' component={DashboardHome} />
        <Route exact path='/dashboard/:username/video' component={DashboardVideo} />
        <Route exact path='/:username' component={Channel} />
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default index
