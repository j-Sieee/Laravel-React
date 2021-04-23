import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';


function Index() {
    return (
        <div>
        <Router>
            <div> 
     
            <Link to="/category/Listing" className="btn btn-md btn-primary">Listing</Link>
            <Link to="/category/Add" className="btn btn-md btn-primary">Add</Link>

           <Route path="/category/Listing" component={Listing}></Route>
           <Route path="/category/Add" component={Add}></Route>


            </div>
       </Router>
       </div>
    );
}

export default Index;
