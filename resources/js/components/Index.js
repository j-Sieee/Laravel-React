import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function Index() {
    return (
        <div className="container">
            <Header/>
           
           

        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
