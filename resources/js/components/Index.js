import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from '../reducers/lists';
import Top from './Top';
import List from './List';
import Share from './Share';
import '../../../public/css/index.css';

export default class Index extends Component {
    render() {
        const store = createStore(reducer, applyMiddleware(thunk));
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Top} />
                            <Route exact path="/list" component={List} />
                            <Route exact path="/share" component={Share} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}