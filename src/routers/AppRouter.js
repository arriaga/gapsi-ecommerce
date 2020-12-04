import React from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import HomeApp from "../HomeApp";
import SecondApp from "../SecondApp";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={HomeApp}></Route>
                    <Route exact path="/buscarProductos" component={SecondApp}></Route>

                </Switch>
            </div>
        </Router>
    );
}

