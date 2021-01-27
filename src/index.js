import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './About'  
import Contact from './Contact'  

const routing = (  
<div> 
    <Router> 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> 

      <header id="header" class="header-transparent">
            <div class="container">
                
                    <div id="logo" class="pull-left">
                    <Link to="/">Poetry Forum</Link>
                    </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <Link to="/">Home</Link>  
                        </li>
                        <li class="nav-item">
                            <Link to="/about">Gallery</Link>  
                        </li>
                        <li class="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                     </ul>    
                </nav>
            </div>
        </header>
        <div id="intro">
            <div class="intro-text">
               <br/>
               <br/>
               <br/>
                <h2>Welcome to Poetry Forum</h2>
                <p>A platform to unleash you poetic creativity</p>
                <Link to="/about" class="btn-get-started scrollto">Get Started</Link>
            </div>
        </div>
        <Route exact path="/" component={App} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} /> 
    </Router>
    
</div>
)
ReactDOM.render(routing, document.getElementById('root'));  