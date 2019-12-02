import React from 'react'
import axios from 'axios';
import Project from './project'
import ProjectDetail from './projectdetail'
import BugDetail from './bugdetail'
import Form from './form'
import {Nav, Navbar, NavItem, FormControl} from "react-bootstrap"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Navbar from 'react-bootstrap/Navbar'
// import Navbar from './navbar'

const csrfToken = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            projects:[],
            details: {},
            // deets:{},
            modalIsOpen1: false,
            modalIsOpen2: false,
            bugsname: "",
            comments:"",
            priority:"",
            dueDate: new Date(),
            severity: "",
            selected_project_id:null,
            selected_user_id:null,
            status: "",
            project_title:"",
            startDate: new Date(),
            endDate: new Date(),
            project_status:""
        }

        this.getProjectDetails = this.getProjectDetails.bind(this);

    }

    toggleModal1(){
        this.setState({
            modalIsOpen1 : ! this.state.modalIsOpen1
        })
    }

      toggleModal2(){
        this.setState({
            modalIsOpen2 : ! this.state.modalIsOpen2
        })
    }

    componentDidMount(){
        const url = "/projects"
        fetch(url,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(result=>{
            this.setState({projects:result})
        })
        .catch(error => console.log(error));

    }

    getProjectDetails(project_id){
        const details = this.state.projects.filter(obj=>obj.id === project_id);
        this.setState({
            details:details,
            selected_project_id:project_id,
            // selected_user_id:user_id

        });
        console.log(details)
    }

    //BUG MODAL

    handleBugsnameChange = (event) => {
            this.setState({
            bugsname:event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleDateChange = date => {
        this.setState({
            dueDate: date
        })
    }


    handlePriorityChange = event => {
        this.setState({
            priority: event.target.value
        })
    }

    handleSeverityChange = event => {
    this.setState({
        severity: event.target.value
        })
    }



    handleSubmit2 = event => {
        alert(` ${this.state.bugsname} ${this.state.comments} ${this.state.dueDate} ${this.state.priority} ${this.state.severity}`)
        event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/bugs', {
            modalIsOpen: false,
            bugsname: this.state.bugsname,
            comments:this.state.comments,
            priority:this.state.priority,
            dueDate: new Date(),
            status: this.state.status,
            severity: this.state.severity,
            project_id:this.state.selected_project_id
        }
            )
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    //PROJECT MODAL

    handleProjectTitleChange = event => {
            this.setState({
                project_title: event.target.value
            })
        }

    handleStartDateChange = date => {
            this.setState({
                startDate: date
            })
        }

    handleEndDateChange = date => {
            this.setState({
                endDate: date
            })
        }

    handleProjectStatusChange = event => {
            this.setState({
                project_status: event.target.value
            })
        }

        handleSubmit1 = event => {
    alert(` ${this.state.project_title} ${this.state.startDate} ${this.state.endDate} ${this.state.project_status}`)
    event.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/projects', {
        modalIsOpen: false,
        project_title: this.state.project_title,
        startDate: new Date(),
        endDate: new Date(),
        project_status: this.state.project_status,
        user_id:this.state.selected_user_id

    }
        )
    // this.setState({project_title: event.target.value})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
}

    render(){



        return(


            <div className="container">

                <div className="row">

                    <div className="col-4 border p-4">
                    <Button color="primary" className="position-relative d-inline float-right" onClick={this.toggleModal1.bind(this)}><strong>+</strong></Button>
                    <Project proj={this.state.projects} getProjectDetails={this.getProjectDetails}
                    getBugDetails={this.getBugDetails}/></div>


                <Modal isOpen={this.state.modalIsOpen1}>

                    <ModalHeader toggle={this.toggleModal1.bind(this)}>Add Project</ModalHeader>

                        <ModalBody>

                            <form onSubmit={this.handleSubmit1}>


                                <label>Project Title </label>
                                <input type='text'value ={this.state.project_title} onChange={this.handleProjectTitleChange}/>

                                <label>Start Date</label>
                                <DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange}/>

                                <label>End Date</label>
                                <DatePicker selected={this.state.endDate} onChange={this.handleEndDateChange}/>

                                <label>Status</label>
                                     <select value={this.state.project_status} onChange={this.handleProjectStatusChange}>
                                        <option value="Active">Active</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Delayed">Delayed</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="Completed">Completed</option>
                                    </select>



                                <b/>

                                   <ModalFooter>
                                <Button color="primary">Submit</Button>
                                <Button color="secondary" onClick={this.toggleModal1.bind(this)}>Cancel</Button>
                            </ModalFooter>

                            </form>

                        </ModalBody>

                </Modal>




                    <div className="col-4 border p-4">
                    <ProjectDetail details={this.state.details}/></div>

                    <div className="col-4 border p-4">
                     <Button color="primary" className="position-relative d-inline float-right" onClick={this.toggleModal2.bind(this)}><strong>+</strong></Button>
                    <BugDetail details={this.state.details}/></div>



                <Modal isOpen={this.state.modalIsOpen2}>

                    <ModalHeader toggle={this.toggleModal2.bind(this)}>Log a Bug</ModalHeader>

                        <ModalBody>

                            <form onSubmit={this.handleSubmit2}>


                                <label>Bug Name </label>
                                <input type='text'value ={this.state.bugsname} onChange={this.handleBugsnameChange}/>

                                <label>Issue Log</label>
                                <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>

                                <label>Due Date</label>
                                <DatePicker selected={this.state.dueDate} onChange={this.handleDateChange}/>

                                <label>Priority</label>
                                     <select value={this.state.priority} onChange={this.handlePriorityChange}>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>

                               <label>Severity</label>
                                 <select value={this.state.severity} onChange={this.handleSeverityChange}>
                                    <option value="Minor">Minor</option>
                                    <option value="Major">Major</option>
                                    <option value="Critical">Critical</option>
                                </select>

                                <b/>

                                   <ModalFooter>
                                <Button color="primary">Submit</Button>
                                <Button color="secondary" onClick={this.toggleModal2.bind(this)}>Cancel</Button>
                            </ModalFooter>

                            </form>

                        </ModalBody>

                </Modal>

                </div>

            </div>

            )
    }

}


export default App;