import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Connexion from './Connexion'
import { Inscription } from './Inscription'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Connexion} />
                <Route path="/inscription" component={Inscription} />
            </Switch>

        </BrowserRouter>

    )
}
