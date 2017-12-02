import React, { Component } from 'react';
import autobind from 'react-autobind'
import '../css/App.css';

class BillView extends Component{
	constructor(props){
		super(props);
		autobind(this);
		 this.state={
		    billno:'',
		    bills: []
	    };
	}

	handleBillNoChange(e){
  		this.setState({
  			billno: e.target.value
  		});
  	}

  	handleSubmit(e){
    	fetch(`http://localhost:3001/viewBill?billno=`+this.state.billno)
	    .then(function (data){
	      console.log('Request success',data);
	      this.setState({ bills: data });
	    })
	    .catch(function(error){
	      console.log('Request failure: ',error);
	    });

	    console.log(this.state);
	    this.forceUpdate();
  	}
//how to css?
	render(){
		return(
			<div className='App'>
				<div className='Bill'>
					<form>
						<input onChange={this.handleBillNoChange} className="inputField" placeholder="Bill No."/>
						<input onClick={this.handleSubmit} className="submit" type="button" value="Submit" />
					</form>
					{
					this.state.bills.map((bill, i) => {
						return(
							<table key={i++}>
								<th>
									Category
								</th>
								<th>
									Information
								</th>
								<tr>
									<td className="tableCat">Title</td>
									<td>{bill.title}</td>
								</tr>
								<tr>
									<td className="tableCat">Scope</td>
									<td>{bill.scope}</td>
								</tr>
								<tr>
									<td className="tableCat">Type</td>
									<td>{bill.billtype}</td>
								</tr>
								<tr>
									<td className="tableCat">Status</td>
									<td >{bill.status}</td>
								</tr>
								<tr>
									<td className="tableCat">Reading</td>
									<td>{bill.reading}</td>
								</tr>
								<tr>
									<td className="tableCat">Date Filed</td>
									<td>{bill.datefiled}</td>
								</tr>
							</table>
						)	
						
					})
				}
				</div>


			</div>
		);
	}
}

export default BillView;
