import React from 'react';
import {
  Card, CardFooter, Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSalary({ staff }) {
  return (
    <Card >
      <h5><b>{staff.name}</b></h5>
      <p>Mã nhân viên : {staff.id}</p>
      <p>Hệ số lương : {staff.salaryScale}</p>
      <p>Số giờ làm thêm : {staff.overTime}</p>
      <CardFooter><h6>Lương : {(staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)}</h6></CardFooter>
    </Card>
  )
}
const Salary = (props) => {
  const salary = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-4 col-lg-4">
        <RenderSalary staff={staff} />
      </div>
    )
  })
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/stafflist">Nhân Viên</Link></BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        {salary}
      </div>
    </div>
  )
}

export default Salary;  