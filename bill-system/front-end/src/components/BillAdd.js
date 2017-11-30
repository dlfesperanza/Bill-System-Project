import React, { Component } from 'react';
import autobind from 'react-autobind';

class BillAdd extends Component{
	constructor(props) {
	    super(props);
	    autobind(this)
	    this.state={
		    billno:'',
		    title:'',
		    body:'',
		    billtype:'',
		    scope:'',
		    status:'',
		    subject:'',
		    reading:'',
		    datefiled:'',
		    empno:''
	    };
  	}

  	handleBillNoChange(e){
  		this.setState({
  			billno: e.target.value
  		});
  	}

  	handleTitleChange(e){
  		this.setState({
  			title: e.target.value
  		});
  	}

  	handleBodyChange(e){
  		this.setState({
  			body: e.target.value
  		});
  	}

  	handleBillTypeChange(e){
  		this.setState({
  			billtype: e.target.value
  		});
  	}

  	handleScopeChange(e){
  		this.setState({
  			scope: e.target.value
  		});
  	}

  	handleStatusChange(e){
  		this.setState({
  			status: e.target.value
  		});
  	}

  	handleSubjectChange(e){
  		this.setState({
  			subject: e.target.value
  		});
  	}

  	handleReadingChange(e){
  		this.setState({
  			reading: e.target.value
  		});
  	}

  	handleDateChange(e){
  		this.setState({
  			datefiled: e.target.value
  		});
  	}

  	handleSubmit(e){
    	fetch(`http://www.localhost:3001/addBills`,{
	      method:'POST',
	      headers:{
	        "Content-Type":"application/json"
	      },
	      body:JSON.stringify(this.state)
	    })
	    .then(function (data){
	      console.log('Request success',data);
	    })
	    .catch(function(error){
	      console.log('Request failure: ',error);
	    });

	    console.log(this.state);
	    this.forceUpdate();
  	}


	render(){
		return(
			<div className="App">
				<div className="Bill">
				<form>
					<input onChange={this.handleBillNoChange} className="inputField" placeholder="Bill No."/>
					<input onChange={this.handleTitleChange} className="inputField" placeholder="Title"/>
					<input onChange={this.handleBodyChange} className="inputField" placeholder="Body"/>
					<input onChange={this.handleBillTypeChange} className="inputField" placeholder="Bill Type"/>
					<input onChange={this.handleScopeChange} className="inputField"  placeholder="Scope"/>
					<input onChange={this.handleStatusChange} className="inputField" placeholder="Status"/>
					<input onChange={this.handleSubjectChange} className="inputField" placeholder="Subject"/>
					<input onChange={this.handleReadingChange} className="inputField" placeholder="Reading"/>
					<input onChange={this.handleDateChange} className="inputField" placeholder="Date Filed"/>
					<input onChange={this.handleEmpIDChange} className="inputField" placeholder="Employee ID"/>
					<input onClick={this.handleSubmit} className="submit" type="button" value="Submit" />
				</form>
				</div>
		    </div>
		);
	}
}

export default BillAdd;
