import React, {Component} from 'react';
import JumboTron from "./JumboTron";
import employees from "./Data/Employees";
import {Button, Col, Modal, Row, Table} from "react-bootstrap";
import styled from 'styled-components'
import SearchBox from "./InputField/SearchBox";
import {Form} from "react-bootstrap";
import InputText from "./InputField/InputText";
import InputSelect from "./InputField/InputSelect";
import Countries from "./Data/CountryList";

const StyledSpan = styled.span`
cursor: pointer;
&:hover{
  color: red;
}
`
const StyleRow = styled(Row)`
margin-bottom: 1em;
`
const StyleDiv = styled.div`
padding-left: 0.5em;
padding-right: 0.5em;
`

const StyleButton = styled(Button)`
border-radius: 0;
`




class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_data: employees,
            showEmployeeForm: false,
            empId: '',
            search:'',
            options:["Male", "Female"],
            countries: Countries,
            employee:{},

            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            gender:'',
            country:''
        }
    }

    handleDelete = (id) => {

        console.log(this.state.employee_data[id])

    }
    handleSearchBox = (event) =>{
        event.preventDefault()
        this.setState({search: event.target.value})
    }

    handleChange = event => {
        event.preventDefault()
        const {value, name} = event.target;
        this.setState({[name]: value})
    }



    render() {

        const{search, employee_data, options, countries} = this.state
        function EmployeeForm(props){
            let editable = false
            return(
                <Modal {...props} size={"lg"} centered={true}>
                    <Modal.Header closeButton={true}>
                        <Row>
                            <Col>
                                <Modal.Title>Employee</Modal.Title>
                            </Col>
                            <Col><Button onClick={()=> editable = !editable}>Edit</Button></Col>
                        </Row>

                    </Modal.Header>
                        <Form>
                            <Modal.Body>
                                <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputText
                                                label={"First Name:"}
                                                name={'first_name'}
                                                handleChange={props.handleChange}
                                                type={"text"}
                                                value={props.employee.first_name}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <InputText
                                                label={"Last Name:"}
                                                name={"last_name"}
                                                handleChange={props.handleChange}
                                                type={"text"}
                                                value={props.employee.last_name}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputText
                                                label={"Email:"}
                                                name={"email"}
                                                handleChange={props.handleChange}
                                                type={"email"}
                                                value={props.employee.email}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputSelect
                                                label={"Gender:"}
                                                name={"gender"}
                                                handleChange={props.handleChange}
                                                options={options}
                                                value={props.employee.gender}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <InputSelect
                                                label={"Country:"}
                                                name={"country"}
                                                handleChange={props.handleChange}
                                                options={countries}
                                                value={props.employee.country}
                                                readOnly={true}
                                            />
                                        </Form.Group>
                                </Form.Row>
                            </Modal.Body>
                            <Modal.Footer>
                                {
                                    editable ?
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <StyleButton type={"submit"} variant={"success"} block={true}>Submit</StyleButton>
                                            </Form.Group>
                                        </Form.Row>
                                        : null
                                }

                            </Modal.Footer>
                        </Form>
                </Modal>
            )
        }


        const filterEmployee = employee_data.filter(employee => employee.first_name.toLowerCase().includes(search.toLowerCase()))
        return (
            <StyleDiv>
                <JumboTron/>
                <StyleRow>
                    <Col>
                        <SearchBox placeholder={"Search by First name"} handleChange={this.handleSearchBox}/>
                    </Col>
                    <Col/>
                    <Col/>

                </StyleRow>
                <Row>

                        <Table striped={true} bordered={true} hover={true} size={"sm"} responsive={true}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                filterEmployee.map((employee, index)=>(
                                    <tr key={index}>
                                        <td>{employee.id}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone_number}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.country}</td>
                                        <td>
                                            <StyledSpan onClick={()=> this.setState({
                                                employee_data: this.state.employee_data.slice(0, index).concat(this.state.employee_data.slice((index+1),
                                                this.state.employee_data.length))
                                            })}>Delete</StyledSpan> |
                                            <StyledSpan>Edit</StyledSpan> |
                                            <StyledSpan onClick={()=> this.setState({showEmployeeForm: true,
                                                employee: employee
                                            })}>View</StyledSpan>
                                        </td>
                                    </tr>
                                ))
                            }


                            </tbody>
                        </Table>

                </Row>
                <EmployeeForm
                    show={this.state.showEmployeeForm}
                    handlechange={this.handleChange}
                    employee={this.state.employee}
                    onHide={()=> this.setState({showEmployeeForm: !this.state.showEmployeeForm})}/>
            </StyleDiv>
        );
    }
}

export default EmployeeTable;