import React, { Component } from 'react';
import logo from './../icons/wreath.png';
import Home from './Home';
import './../css/App.css';

import Bill from './Bill';
import BillAdd from './BillAdd';
import BillView from './BillView';
import BillList from './BillList';
import BillEdit from './BillEdit';
import BillSearch from './BillSearch';
import BillDelete from './BillDelete';

import Legislator from './Legislator';
import LegislatorAdd from './LegislatorAdd';
import LegislatorList from './LegislatorList';
import LegislatorSearch from './LegislatorSearch';

import axios from 'axios';
import autobind from 'react-autobind';
import  { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    autobind(this);
    this.state = {
        keyword: '',
        resultsName: '',
        resultsDetails: '',
        resultsID: '',
        raw: '',
        name: '',
        detail: ''
      }
  }

  searchAll() {
    const self = this;
      axios.get('http://localhost:3001/peoples', {})
      .then(function (response) {
        self.setState({
          raw: JSON.stringify(response.data)
        })
      })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bill Information System</h1>
        </header>
        <div className="App-tab">
          <a className="tab-btn" href="/">Home</a>
          <a className="tab-btn" href="/bill">Bill</a>
          <a className="tab-btn" href="/">Legislator</a>
          <a className="tab-btn" href="/">Senate</a>
          <a className="tab-btn" href="/">House</a>
        </div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/bill" component={Bill} />
            <Route exact={true} path="/bill/view/" component={BillView} />
            <Route exact={true} path="/bill/list" component={BillList} />
            <Route exact={true} path="/bill/add" component={BillAdd} />
            <Route exact={true} path="/bill/edit" component={BillEdit} />
            <Route exact={true} path="/bill/search" component={BillSearch} />
            <Route exact={true} path="/bill/delete" component={BillDelete} />

            <Route exact={true} path="/legislator" component={Legislator} />
            <Route exact={true} path="/legislator/add" component={LegislatorAdd} />
            <Route exact={true} path="/legislator/list" component={LegislatorList} />
            <Route exact={true} path="/legislator/search" component={LegislatorSearch} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
