import React, { Component } from 'react';
import view from './../icons/view.png';
import list from './../icons/list.png';
import search from './../icons/search.png';
import add from './../icons/add.png';
import edit from './../icons/edit.png';
import del from './../icons/delete.png';
import autobind from 'react-autobind'
import BillList from './BillList';
import BillAdd from './BillAdd';
import BillView from './BillView';
import  { BrowserRouter as Router, Route} from 'react-router-dom'

const displayPage = (title) => {
	if (title === "List"){
		return <BillList />
		
	}else if (title === "Add"){
		return <BillAdd />
	}else if (title === "View"){
		return <BillView />
		
	}
}
class Bill extends Component{
	constructor(props) {
	    super(props);
	    autobind(this)
	    this.state={
	    	title: ''
	    };
	}

  	handleClicked(e){
	    this.setState({
	      title: e.target.title
	    })
	    this.forceUpdate();
	    displayPage(this.state.title);

	}

	render(){
		return(
			<div className="App">
				<div className="Bill">
					<a className="bill-btn" href="/bill/list" title="List">
						<img src={list} className="Bill-icons" alt="logo" />
					</a>
					<a className="bill-btn" href="/bill/view" title="View">
						<img src={view} className="Bill-icons" alt="logo" />
					</a>
					<a className="bill-btn" href="/bill/search" title="Search">
						<img src={search} className="Bill-icons" alt="logo" />
					</a>
					<a className="bill-btn" href="/bill/add" title="Add">
						<img src={add} className="Bill-icons" alt="logo" />
					</a>
					<a className="bill-btn" href="/bill/edit" title="Edit">
						<img src={edit} className="Bill-icons" alt="logo" />
					</a>
					<a className="bill-btn" href="/bill/delete" title="Delete">
						<img src={del} className="Bill-icons" alt="logo" />
					</a>
				</div>
		    </div>
		);
		
	}
}

export default Bill;
