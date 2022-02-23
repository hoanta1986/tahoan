
import React from 'react';
import {
    Card,
    CardImg, Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffItem({ staff }) {
    return (
        <Card className="Center">
            <Link to={`/stafflist/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
            </Link>
            {staff.name}
        </Card>
    );
}
const StaffList = (props) => {
    const stafflist = props.staffs.map((staff) => {
        return (
            <div className="col-6 col-md-4 col-lg-2" >
                <RenderStaffItem staff={staff} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active><b>Nhân Viên</b></BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {stafflist}
            </div>
        </div>
    );
}

export default StaffList;