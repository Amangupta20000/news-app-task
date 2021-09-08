import React from 'react'
import { Route, Switch } from 'react-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Pagination from './Pagination'
import Sidebar from './Sidebar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Sidebar2 from './Sidebar2'
import { Redirect } from 'react-router-dom';


function App() {
    return (
        <div>
        <Sidebar2/>
        <Sidebar/>
           <Switch>
           <Route exact path='/news-app-task/' component={Page1}/>
           <Route path='/' exact  ><Redirect to='/news-app-task'/> </Route>
           <Route exact path='/page2' component={Page2}/>
           <Route exact path='/page3' component={Page3}/>
           </Switch> 
           <Pagination/>
        </div>
    )
}

export default App
