import React from 'react';
import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Review from  './components/Review';
import Article from './components/Article'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
const App = () =>{
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path = "/review">
                        <Review/>
                    </Route>
                    <Route path = '/article'>
                        <Article/>
                    </Route>
                    <Route path = "/">
                        <Main/>
                    </Route>
                </Switch>
            </div>
        </Router>
        
        
    )
}
export default App