import React, { Component } from 'react';
import autobind from 'react-autobind'
import axios from 'axios';

class BillList extends Component{
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
	      detail: '',
	      bills: []
	    }
	}

  	showAll(e){
    console.log(this.state);
		fetch(`http://localhost:3001/bills`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result });
		})
		.catch((e) => { console.log(e); });

    console.log(this.state.bills);
    this.forceUpdate();
  	}

	render(){
		return(
			<div className="App">
				{this.showAll}
				{this.state.bills} <br/>
		    </div>
		);
	}
}

export default BillList;
