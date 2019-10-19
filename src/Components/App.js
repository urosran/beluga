import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts'
import Dashboard from './Layouts/Dashboard';
import {getAllIssues} from '../Data/Issues'

export default class extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    this.setState(await getAllIssues().then((data) => {this.setState(data)}));
  }


  render(){
    return(
      <Fragment>
          <Header/>
          <Footer/>
          <Dashboard data={this.state}/>
      </Fragment>
    )
  }
}