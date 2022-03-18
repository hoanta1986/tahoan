import React from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';


//functional component
function RenderRoom({ department }) {
  return (
    <Card  >
      <CardHeader><b>{department.name}</b></CardHeader>
      <CardBody>Số lượng nhân viên : {department.numberOfStaff}</CardBody>
    </Card>
  )
}
const Room = (props) => {
  const room = props.departments.map((department) => {

    return (
      <div class key={department.id} className="col-12 col-md-4 col-lg-4">
        <RenderRoom department={department} />
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