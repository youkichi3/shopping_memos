import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './Top';

export default class Index extends Component {
    render() {
        return (
            <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Top} />
                        </Switch>
                    </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}