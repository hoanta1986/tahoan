import React from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';



function RenderRoom({ staff }) {
  return (
    <Card class key={staff.id} >
      <CardHeader><b>{staff.department.name}</b></CardHeader>
      <CardBody>Số lượng nhân viên : {staff.department.numberOfStaff}</CardBody>
    </Card>
  )
}

const Room = (props) => {
  const room = props.staffs.map((staff) => {

    return (
      <div  className="col-12 col-md-4 col-lg-4">
        <RenderRoom staff={staff} />
      </div>
    )
  })
return (
    <div className="row">
      {room}
    </div>
  )
}

export default Room; 