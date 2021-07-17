import React from 'react';
import './style.css'
import Header from './components/Header'
import Readreview  from './components/Readreview';
import ReadArticle from './components/ReadArticle';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/Footer';
import useApi from './hooks/useApi'
import Review from  './components/Review';
import Article from './components/Article';
import About from './components/About';
import ScrollTop from './components/ScrollTop'
const Main = React.lazy(()=> import ('./components/Main'))
const App = () =>{
    const datas = useApi('Api');
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <ScrollTop>
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
                    <React.Suspense fallback={<p>Loading</p>}> 
                    <Route path = "/">
                        <Main datas = {datas}/>
                    </Route>
                    </React.Suspense>
                    </ScrollTop>
                </Switch>
                <Footer/>
            </div>
        </Router>
        
        
    )
}
export default App