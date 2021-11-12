import React from "react";
import { Switch,Link,Route, } from "react-router";
import Home from './Home';
import  Login from "./Login";

const Rotas = () =>{

    return(
            
        <main>
            <Switch
            
            >
                <Route path='/Login'component={Login}/>
                <Route path='/Home'component={Home}/>
            </Switch>

        </main>

    );

}

export default Rotas;