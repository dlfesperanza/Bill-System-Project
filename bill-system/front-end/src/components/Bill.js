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
import  { BrowserRouter as Router, Route} from 'react-router-dom'

const displayPage = (title) => {
	if (title === "List"){
		return <BillList />
		
	}else if (title === "Add"){
		return <BillAdd />
		
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
		if (this.state.title === ''){
			return(
				<div className="App">
					<div className="Bill">
						<input className="list-btn" type="button" onClick={this.handleClicked} title="List"></input>
						<input className="view-btn" type="button" onClick={this.handleClicked} title="View"></input>
						<input className="search-btn" type="button" onClick={this.handleClicked} title="Search"></input>
						<input className="add-btn" type="button" onClick={this.handleClicked} title="Add"></input>
						<input className="edit-btn" type="button" onClick={this.handleClicked} title="Edit"></input>
						<input className="delete-btn" type="button" onClick={this.handleClicked} title="Delete"></input>
					</div>
			    </div>
			);		
		}else {
			return(
				<div className="App">
					<div className="Bill">
						{displayPage(this.state.title)}
					</div>
			    </div>
				
			);
		}
		
	}
}

export default Bill;
