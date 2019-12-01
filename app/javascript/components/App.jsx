import React from 'react'
import axios from 'axios';
import Project from './project'
import ProjectDetail from './projectdetail'
import BugDetail from './bugdetail'
import Form from './form'
// import {Button} from "react-bootstrap"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            projects:[],
            details: {},
            // deets:{},
            modalIsOpen: false,
            bugsname: "",
            comments:"",
            priority:"low",
            dueDate: new Date(),
            severity: ""


        }

        this.getProjectDetails = this.getProjectDetails.bind(this);

    }

    toggleModal(){
        this.setState({
            modalIsOpen : ! this.state.modalIsOpen
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
        this.setState({details:details});
        console.log(details)
    }

    //Form
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

    handleSubmit = event => {
        alert(` ${this.state.bugsname} ${this.state.comments} ${this.state.dueDate} ${this.state.priority} ${this.state.severity}`)
        event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/projects', {
            modalIsOpen: false,
            bugsname: "",
            comments:"",
            priority:"low",
            dueDate: new Date(),
            severity: ""
        }
            )
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

                    <div className="col-4 border p-4"><Project proj={this.state.projects} getProjectDetails={this.getProjectDetails}
                    getBugDetails={this.getBugDetails}/></div>
                    <div className="col-4 border p-4"><ProjectDetail details={this.state.details}/></div>
                    <div className="col-4 border p-4"><BugDetail details={this.state.details}/></div>


                    <Button color="primary" onClick={this.toggleModal.bind(this)}>Add Bug</Button>


                <Modal isOpen={this.state.modalIsOpen}>

                    <ModalHeader toggle={this.toggleModal.bind(this)}>Log a Bug</ModalHeader>

                        <ModalBody>

                            <form onSubmit={this.handleSubmit}>


                                <label>Bug Name </label>
                                <input type='text'value ={this.state.bugsname} onChange={this.handleBugsnameChange}/>

                                <label>Issue Log</label>
                                <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>

                                <label>Due Date</label>
                                <DatePicker selected={this.state.dueDate} onChange={this.handleDateChange}/>

                                <label>Priority</label>
                                     <select value={this.state.priority} onChange={this.handlePriorityChange}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>

                               <label>Severity</label>
                                 <select value={this.state.severity} onChange={this.handleSeverityChange}>
                                    <option value="minor">Minor</option>
                                    <option value="major">Major</option>
                                    <option value="critical">Critical</option>
                                </select>

                                <b/>
                                <Button type="submit">Submit</Button>

                            </form>

                        </ModalBody>

                            <ModalFooter>
                                <Button color="primary">Submit</Button>
                                <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                            </ModalFooter>

                </Modal>

                </div>

            </div>

            )
    }

}


export default App;