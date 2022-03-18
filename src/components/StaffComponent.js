import React from 'react';
import {
    Card, CardImg,
    Breadcrumb, BreadcrumbItem
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

  function RenderStaff({staff}) {
    return (
      <div className="container">
      <div className="row">
      <div className="col-12 col-md-4 col-lg-3">
       <Card>
          <CardImg width="100%" top src={staff.image} alt={staff.name} />
          </Card>
      </div>
            <div className="col-12 col-md-8 col-lg-9 " >
            <h4>Họ và Tên : {staff.name}</h4>
            <p>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban : {staff.department.name} </p>
            <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm : {staff.overTime}</p>
    </div>
    </div>
    </div>
    );
  }
  
  const Staff = (props) => {
    if (props.staff != null)
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/stafflist">Nhân Viên</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">
            <RenderStaff staff={props.staff} />
         
          </div>
        </div>
      );
    else
      return (
        <div></div>
      );
  }


  export default Staff;