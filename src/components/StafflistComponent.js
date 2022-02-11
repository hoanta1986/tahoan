
import React, { Component } from 'react';
import { Card, CardFooter,CardHeader } from 'reactstrap';
import dateFormat from 'dateformat';
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }
    renderStaff(staff) {
        if (staff != null)
            return (
                <Card className="col-12 col-md-6 col-lg-4 " >
                    <CardFooter>
                        <h4>Họ và Tên : {staff.name}</h4>
                        <p>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban : {staff.department.name} </p>
                        <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                        <p>Số ngày đã làm thêm : {staff.overTime}</p>
                    </CardFooter>
                </Card>

            );
        else
            return (
                <div> <p>Bấm vào tên nhân viên để xem thông tin.</p></div>
            );
    }
    render() {

        const StaffList = this.props.staffs.map((staff) => {
            return (
                <CardHeader className="col-12 col-md-6 col-lg-4 ">
                    <ul className="list-group">
                        <li className="list-group-item"
                            onClick={() => this.onStaffSelect(staff)}>{staff.name}
                        </li >
                    </ul>
                </CardHeader>
            );
        
        });
      
        return (
           
            <div className="container">
                <div className="row">
                    {StaffList}
                </div>
              
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}



export default StaffList;