import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import projects from 'Content'

import { Portfolio, NotFound, Header, SingleProject, Navigation } from './components'

import { AppWrapper } from './App.styles'

const App = () => {
    const sortedProjects = projects.sort((a, b) => Date.parse(b.end_date) - Date.parse(a.end_date))
    return (
        <AppWrapper>
            <Header />
            <Navigation />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <Portfolio {...props} projects={sortedProjects} />}
                />
                <Route
                    path="/:id"
                    render={props => <SingleProject {...props} projects={sortedProjects} />}
                />
                <Route component={NotFound} />
            </Switch>
        </AppWrapper>
    )
}

export default App
