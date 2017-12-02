import React, {Component} from 'react';
import autobind from 'react-autobind';

class LegislatorSearch extends Component {
  constructor(props){
    super(props);
    autobind(this);
    this.state = {
      empid: 0,
      fname: '',
      lname: '',
      type: '',
      results: []
    }
  }

  search(){
    var url = 'localhost:3001/searchLegislator?';

    if (this.state.type != ''){
      url = url + 'type=' + this.state.type;
    }if (this.state.fname != ''){
      url = url + '&fname=' + this.state.fname;
    }if (this.state.fname != ''){
      url = url + '&lname=' + this.state.lname;
    }if (this.state.empid != 0){
      url = url + '&empid=' + this.state.empid;
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
          <select className="searchField" onChange={(e)=> { this.setState({type: e.target.value })}}>
            <option selected disabled>Type</option>
            <option value="SENATOR">Senator</option>
            <option value="HOUSEMEMBER">House Member</option>
          </select>
          <input type="number" className="searchField" min="0" placeholder="empid"
            onChange={ (e) => { this.setState({empid: e.target.value}) }}
          />
          <input type="text" className="searchField" placeholder="fname"
          />
          <input type="button" className="submit" value="search"
            onClick={ this.search }
          />
        </div>
        <br/><br/>
        <div className="Bill">
          { this.state.results.map(
            (legislator, i) => {
              return (
                <table key={i++}>
    							<th>
    								Category
    							</th>
    							<th>
    								Information
    							</th>
    							<tr>
    								<td className="tableCat">Name</td>
    								<td>{legislator.fname + legislator.lname}</td>
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
          }
        </div>
      </div>
    )
  }
}

export default LegislatorSearch;
