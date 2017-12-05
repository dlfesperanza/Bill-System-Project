import React, {Component} from 'react';

export default class LegislatorEdit extends Component{
	constructor(props){
		super(props);

	}
	search(){
    var url = 'http://localhost:3001/searchLegislator?';
    if (this.state.type !== ''){
      url = url + 'type=' + this.state.type;
    }if (this.state.fname  !== ''){
      if (url !== 'http://localhost:3001/searchLegislator?'){
        url = url + '&'
      }url = url + 'fname=' + this.state.fname;
    }if (this.state.lname !== ''){
      if (url !== 'http://localhost:3001/searchLegislator?'){
        url = url + '&';
      }url = url + 'lname=' + this.state.lname;
    }if (this.state.empid !== 0){
      if (url !== 'http://localhost:3001/searchLegislator?'){
        url = url + '&';
      }url = url + 'empid=' + this.state.empid;
    }

    fetch(url)
    .then((response) => { return response.json()})
    .then((result) => {
      this.setState({results: result})
    })
    .catch( () => console.log("failure"))
  }

  render(){
    return(
      <div className="App">
        <div>
          <select className="searchField"
           onChange={(e)=> { this.setState({type: e.target.value })}}>
            <option selected disabled>Type</option>
            <option value="senator">Senator</option>
            <option value="housemember">House Member</option>
          </select>
          <br/>
          <input type="number" className="searchField" min="0" placeholder="empid"
            onChange={ (e) => { this.setState({empid: e.target.value}) }}
          />
          <br/>
          <input type="text" className="searchField" placeholder="First Name"
            onChange={ (e) => { this.setState({ fname: e.target.value }) }}
          />
          <br/>
          <input type="text" className="searchField" placeholder="Last Name"
            onChange={ (e) => { this.setState({ lname: e.target.value }) }}
          />
          <br/>
          <input type="button" className="submit" value="search"
            onClick={ this.search }
          />
        </div>
        <br/><br/>
          { this.state.results.map(
            (legislator, i) => {
              return (
								<div className="Bill" onHover={} onClick={}>
                <table key={i++}>
    							<th>
    								Category
    							</th>
    							<th>
    								Information
    							</th>
    							<tr>
    								<td className="tableCat">Name</td>
    								<td>{legislator.fname + " " +legislator.mname + " " + legislator.lname}</td>
    							</tr>
                  <tr>
    								<td className="tableCat">Employee ID</td>
    								<td>{legislator.empid}</td>
    							</tr>
                  <tr>
    								<td className="tableCat">Type</td>
    								<td>{legislator.type}</td>
    							</tr>
                  <tr>
    								<td className="tableCat">Sex</td>
    								<td>{legislator.sex}</td>
    							</tr>
                  <tr>
    								<td className="tableCat">Terms</td>
    								<td>{legislator.noofterms}</td>
    							</tr>
                  <tr>
  								  <td className="tableCat">Salary</td>
      							<td>{legislator.sal}</td>
      						</tr>
      					</table>
              )
            })
						</div>
          }
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
