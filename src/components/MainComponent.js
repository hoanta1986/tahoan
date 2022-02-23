import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StafflistComponent';
import { STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
     
    }
  }
  render() {
  
    return (
      <div>
        <Header />
        <Switch>

          <Route exact path="/stafflist" component={() => <StaffList staffs={this.state.staffs} />} />
        
       
          <Redirect to="/stafflist" />
        </Switch>
        <Footer />
        </div>
    );
  }
}
export default Main;