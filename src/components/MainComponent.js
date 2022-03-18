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
      departments: DEPARTMENTS,
      id: '',
    search: '',
       name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: '',
                annualLeave: '',
                overTime: '',
                salary: '',
                image: '/assets/images/alberto.png',
          
}
  }

  handleSearch = (search) => {
    this.setState({
   search:search
     })
  
  }
 
  handleSubmit = (item) => { 

 const items  = this.state.staffs;
    items.push({
       id:16,
     name: item.name,
      doB: item.doB,
      salaryScale: item.salaryScale,
      startDate: item.startDate,
      department:item.department,
      annualLeave: item.annualLeave,
      overTime: item.overTime,
      salary: item.salary,
      image: item.image
    })
    this.setState({
    items:items
    })
     
  localStorage.setItem('add',JSON.stringify(items))
  }
 
  render() {

  const Users = [];
    this.state.staffs.forEach((staff) => {
      if (staff.name.toLowerCase().indexOf(this.state.search) !== -1) {
        return (
          Users.push(staff)
        )
      }
    });
    
     const StaffWithId = ({ match }) => {
      return (
        <Staff staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
       />
        );
    };
    return (
      <div>
          <Header />
        <Switch>
          <Route path="/stafflist/:staffId" component={StaffWithId} />
          <Route exact path="/stafflist" component={() => <StaffList
             staffs={Users}
            handleSearch={this.handleSearch}
            handleSubmit={this.handleSubmit} />} />  
          <Route exact path="/salary" component={() => <Salary staffs={this.state.staffs} />} />
          <Route exact path="/room" component={() => <Room departments={this.state.departments}  />} />
         <Redirect to="/stafflist" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;