import React,{Component} from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
 import {
    FormGroup, Col,
     Button, Input, Label, Form, Modal, ModalBody, ModalHeader,
     FormFeedback
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from '../shared/departments';
class Add extends Component {
     constructor(props) {
         super(props);
         this.state = {
        
            departments: DEPARTMENTS,
     id:'',
          isModalOpen: false,
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
       
     touched: {
                 name: false,
                 doB: false,
                 startDate: false,
             },
         }

         this.toggleModal = this.toggleModal.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleSearch = this.handleSearch.bind(this);
     }
  toggleModal(){
         this.setState({
             isModalOpen: !this.state.isModalOpen
         })
     }
    handleSubmit() {
   
        const item = {
     id:this.state.id,
      name: this.state.name,
      doB:this.state.doB,
    salaryScale : this.state.salaryScale,
    startDate : this.state.startDate,
    department :this.state.department,
    annualLeave : this.state.annualLeave,
    overTime : this.state.overTime,
    salary : this.state.salary,
    image : this.state.image
    }
    this.props.handleSubmit(item)
 }

    handleAdd(event) {
      
    
           const target = event.target;
        const value = target.value;
       const name = target.name;
        this.setState({
            [name]: value,
        
        })
  }
     
    handleChange(event){
    const target = event.target;
       
        const value = target.value;
        const search = target.name;
        this.setState({
         [search]:value
        })
     }
     
     handleSearch(event){
   this.setState({
            search:event.target.value
         })
 this.props.handleSearch(this.state.search)
 }

     handleBlur = (field) =>(evt) => {
          this.setState({
              touched: { ...this.state.touched,[field]:true}
          })
      }

     validate(name, doB, startDate) {
         const errors = {
             name: '',
             doB: '',
             startDate: ''
         }

      if (this.state.touched.name && name.length < 3)
             errors.name = 'Yêu cầu nhập hơn 2 ký tự';
         else if (this.state.touched.name && name.length > 30)
             errors.name = 'Yêu cầu nhập ít hơn 30 ký tự'
    //      else if(this.state.touched.name&&name ==='')
    //   errors.name="yeu cau nhap"
         if (this.state.touched.doB && doB ==='')
             errors.doB = 'Yêu cầu nhập'
         if (this.state.touched.startDate && startDate ==='' )
             errors.startDate = 'Yêu cầu nhập'
         return errors;
     }

    render() {
 
      const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
          return (
          <React.Fragment>
                    <FormGroup className="mx-auto">
                        <Button onClick={this.toggleModal} type="button" className="fa fa-plus-circle"></Button>
                         </FormGroup>
       
              <FormGroup className="ml-auto" row>
                             <Col xs={8}>
                             <Input type="text" name="search"

                               value={this.state.search}
                               onChange={this.handleChange}
                             />
                         </Col>
                      <Col xs={2}>
                             <Button onClick={this.handleSearch} type="button" color="primary"> Tìm</Button> 
                              </Col>   
                  </FormGroup>
  
             
                     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                         <ModalHeader  toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
                         <ModalBody>
                             <Form  onSubmit={this.handleSubmit} >
                                 <FormGroup row>
                                     <Label md={3} htmlFor="name">Tên</Label>
                                     <Col md={8}>
                                         <Input type="text"  name="name"
                                             value={this.state.name}
                                             valid={errors.name === ''}
                                             invalid={errors.name !== ''}
                                             onBlur={this.handleBlur('name')}
                                             onChange={this.handleAdd} required/>
                                          <FormFeedback>{errors.name}</FormFeedback> 
                                     </Col>
                                 </FormGroup>
                                 <FormGroup row>
                                     <Label md={3} htmlFor="doB">Ngày sinh</Label>
                                     <Col md={8}>
                                         <Input type="date"  name="doB"
                                             value={this.state.doB}
                                             valid={errors.doB === ''}
                                             invalid={errors.doB !== ''}
                                              onBlur={this.handleBlur('doB')}
                                             onChange={this.handleAdd}required/>
                                          <FormFeedback>{errors.doB}</FormFeedback> 
                                    </Col>
                                      </FormGroup>
                                 <FormGroup row>
                                     <Label md={3} htmlFor="startDate">Ngày vào công ty</Label>
                                     <Col md={8}>
                                         <Input type="date"  name="startDate"
                                             value={this.state.startDate}
                                             valid={errors.startDate === ''}
                                             invalid={errors.startDate !== ''}
                                         onBlur={this.handleBlur('startDate')}
                                             onChange={this.handleAdd}required/>
                                          <FormFeedback>{errors.startDate}</FormFeedback> 
                                     </Col>
                                 </FormGroup>
                                 <FormGroup row> 
                                     <Label md={3} htmlFor="department">Phòng ban</Label>
                                     <Col  md={8}>
                                          <select className="form-control"  name="department"
                                              value={this.state.department}
                                           onChange={this.handleAdd}> 
                                            <option  >Sale</option>
                                             <option  >HR</option>
                                             <option  >Marketing</option>
                                             <option  >IT</option>
                                            <option >Finance</option>  
                                             
                                        </select>
                                     </Col>
                                 </FormGroup> 
                                 <FormGroup row>
                                     <Label md={3} htmlFor="salaryScale">Hệ số lương</Label>
                                     <Col md={8}>
                                         <Input type="number"  name="salaryScale"
                                             value={this.state.salaryScale}
                                             onChange={this.handleAdd}  />
                                     </Col>
                                 </FormGroup>
                                 <FormGroup row>
                                     <Label md={3} htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                     <Col md={8}>
                                         <Input type="number" name="annualLeave"
                                             value={this.state.annualLeave}
                                             onChange={this.handleAdd}  />
                                     </Col>
                                 </FormGroup>
                                 <FormGroup row>
                                     <Label md={3} htmlFor="overTime">Số ngày đã làm thêm</Label>
                                     <Col md={8}>
                                         <Input type="number"  name="overTime"
                                             value={this.state.overTime}
                                             onChange={this.handleAdd}  />
                                     </Col>
                                 </FormGroup>
                                  <Button type="Submit" color="primary">Thêm</Button>
                             </Form>
                         </ModalBody>
                     </Modal>
                
                </React.Fragment>
         )
     }
}
              function RenderStaffItem({staff}) {
    return (
            <div>
                <Card className="Center">
                    <Link to={`/stafflist/${staff.id}`} >
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                    </Link>
                    {staff.name}
                </Card>
            </div>
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
        <div  className="container">
            <div className="row">
              <Breadcrumb>
                    <BreadcrumbItem active><b>Nhân Viên</b></BreadcrumbItem>
                </Breadcrumb>
                  <Add handleSearch={props.handleSearch}
                     handleSubmit={props.handleSubmit}
            //   department={props.department}
                  /> 
             </div>  
            <hr/>
         <div className="row">
                {stafflist}
             </div>
        </div>
    );
     }

export default StaffList;