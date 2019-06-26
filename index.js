import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './Components/App.jsx';
import AboutPage from './Components/AboutMe.jsx';
import ProjectsDone from './Components/ProjectsDone.jsx';
import Whoops404 from './Components/Whoops404.jsx'

import {Router,Route,hashHistory,Link} from 'react-router';

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={Homepage}/>
                    <Route path="/About" component={AboutPage}/>
                    <Route path="/Projects" component={ProjectsDone}/>
                    <Route path="*" component={Whoops404}/>
                </Router>, document.getElementById('portfolio'));