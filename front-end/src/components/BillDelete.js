import React, { Component } from 'react';
import autobind from 'react-autobind'

class BillDelete extends Component{
	constructor(props) {
	    super(props);
	    autobind(this)
	    this.state={
		    billno:'',
		    prompt: ''
	    };
  	}

  	handleBillNoChange(e){
  		this.setState({
  			billno: e.target.value
  		});
  	}

  	handleSubmit(e){
    	fetch(`http://www.localhost:3001/deleteBills`,{
	    	method:'POST',
	    	headers:{
	        "Content-Type":"application/json"
	    	},
	      body:JSON.stringify(this.state)
	    })
	    .then(function (data){
	    	console.log('Request success',data);
	    	this.setState({ prompt: 'Delete success' });
	    	{this.state.prompt}
	    })
	    .catch(function(error){
	    	console.log('Request failure: ',error);
	    });

	    console.log(this.state);
	    this.forceUpdate();
  	}

	render(){
		return(
			<div className="Bill">
					<form>
						<input onChange={this.handleBillNoChange} className="inputField" placeholder="Bill No."/>
						<input onClick={this.handleSubmit} className="submit" type="button" value="Delete" />
					</form>
					{this.state.prompt}
			</div>
		)
	}
}

export default BillDelete;
