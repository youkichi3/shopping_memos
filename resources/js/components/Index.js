import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './Top';
import List from './List';
import '../../../public/css/index.css';

export default class Index extends Component {
    render() {
        return (
            <div>
                    <BrowserRouter>
                        <Switch>
                        <Route exact path="/" component={Top} />
                        <Route exact path="/list" component={List} />
                        </Switch>
                    </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}