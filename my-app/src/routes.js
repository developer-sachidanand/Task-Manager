import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import app from "./component/app";
const Routers = ()=>{
    return(
        <Router>
            <Route path="/" exact component={app}/>
        </Router>
    )
}

export default Routers;
