import React,{useState} from 'react';
import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Review from  './components/Review';
import Article from './components/Article'
import Readreview from './components/Readreview'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/Footer';
import useApi from './hooks/useApi'
const App = () =>{
    const datas = useApi('Api');
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path = '/review/:name'>
                        <Readreview datas = {datas} />
                    </Route>
                    <Route path = "/reviews">
                        <Review datas={datas}/>
                    </Route>
                    <Route path = '/article'>
                        <Article/>
                    </Route>
                    <Route path = "/">
                        <Main datas = {datas}/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
        
        
    )
}
export default App