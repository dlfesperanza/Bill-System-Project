import React, {Component} from 'react';

export default class LegislatorEdit extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
			</div>
		)
	}
}

class LegislatorEditor extends Component{
	constructor(props){
		super(props);
		this.state = {
			empid: this.props.empid,
			fname: '',
			mname: '',
			lname: '',
			type: '',
			sal: 0,
			noofterms: 0,
			termstart: new Date(),
			termend: new Date()
		};
		this.edit = this.edit.bind(this);
	}

	edit(){
		fetch('http://localhost:3001/editLegislator',
			{
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify( this.state )
			}
		)
	}

	render(){
		return(
			<div>
			</div>
		)
	}
}
