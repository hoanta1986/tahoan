import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StafflistComponent';
import Staff from './StaffComponent';
import Room from './RoomComponent';
import Salary from './SalaryComponent';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/departments';
import { Switch, Route, Redirect } from 'react-router-dom';
//component container
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
  departments:DEPARTMENTS
    }
  }
 
  render() {
    const StaffWithId = ({ match }) => {
      return (
        <Staff staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
  />
      );
    };
    return (
      <div>
        <Header />
        <Switch>

          <Route exact path="/stafflist" component={() => <StaffList staffs={this.state.staffs} />} />
          <Route path="/stafflist/:staffId" component={StaffWithId} />
          <Route exact path="/salary" component={() => <Salary staffs={this.state.staffs} />} />
          <Route exact path="/room" component={() => <Room departments={this.state.departments} />} />

          <Redirect to="/stafflist" />
        </Switch>
        <Footer />
        </div>
    );
  }
}
export default Main;