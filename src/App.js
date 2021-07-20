import React from 'react';
import './style.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import useApi from './hooks/useApi'
import ScrollTop from './components/ScrollTop'
const Main = React.lazy(()=> import ('./components/Main'))
const Readreview  = React.lazy(()=> import( './components/Readreview'));
const ReadArticle = React.lazy(()=> import( './components/ReadArticle'));
const Contact = React.lazy(()=> import( './components/Contact'));
const Review = React.lazy(()=> import(  './components/Review'));
const Article = React.lazy(()=> import( './components/Article'));
const About = React.lazy(()=> import( './components/About'));
const App = () =>{
    const datas = useApi('Api');
    return(
        <Router>
            <ScrollTop>
            <React.Suspense fallback={<p>Loading</p>}> 
            <div>
                <Header/>
                <Switch>
                    
                    <Route path = '/review/:name'>
                        <Readreview datas = {datas} />
                    </Route>
                    <Route path = "/reviews">
                        <Review datas={datas}/>
                    </Route>
                    <Route path = '/articles'>
                        <Article datas = {datas}/>
                    </Route>
                    <Route path = '/article/:name'>
                        <ReadArticle datas = {datas}/>
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
            </React.Suspense>
            </ScrollTop>
        </Router>
        
        
    )
}
export default App