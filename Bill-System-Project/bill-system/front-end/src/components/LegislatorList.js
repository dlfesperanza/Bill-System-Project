import React, {Component} from 'react';
import autobind from 'react-autobind';

export default class LegislatorList extends Component {
  constructor(props){
    super(props);
    autobind(this);
    this.state = { legislators: [] };
    this.getLegislators();
  }

  getLegislators(){
    fetch('http://localhost:3001/legislators')
    .then((response) => {return response.json() })
    .then((result) => {
      this.setState({legislators: result})
    })
  }

  render(){
    return(
      <div className="Bill">
        {this.state.legislators.map(
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
            }
        )}
      </div>
    )
  }
}
