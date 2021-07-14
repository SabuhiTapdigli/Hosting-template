import React,{useState} from 'react';
import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Review from  './components/Review';
import Article from './components/Article';
import Readreview from './components/Readreview';
import ReadArticle from './components/ReadArticle';
import About from './components/About';
import Contact from './components/Contact';
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
                    <Route path = '/article/:name'>
                        <ReadArticle datas = {datas}/>
                    </Route>
                    <Route path = '/articles'>
                        <Article datas = {datas}/>
                    </Route>
                    <Route path = '/about-us'>
                        <About/>
                    </Route>
                    <Route path = '/contact-us'>
                        <Contact/>
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