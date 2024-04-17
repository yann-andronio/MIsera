import React, { Component, Fragment } from "react"
import s from "../css/app.module.css"
import { Inscription } from "./Inscription"
import Connexion from "./Connexion"
import Router from "./Router"

class App extends Component {
    state = {
            
    }



    render() {

        return (
            <Fragment>
                <div className={s.container}>                 
                    <Router />
                </div>

            </Fragment>
        )
    }
}

export default App