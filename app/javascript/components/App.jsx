import React from 'react'
import axios from 'axios';
import Project from './project'
import ProjectDetail from './projectdetail'
import BugDetail from './bugdetail'
import Form from './form'
// import {Button} from "react-bootstrap"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            projects:[],
            details: {},
            deets:{},
            modalIsOpen: false


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



    getBugDetails(bug_id){

        // const url = "/bugs/" + 1
        // fetch(url,{
        //     method:"GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //     this.setState({bugs:result})
        // })
        // .catch(error => console.log(error));

        // const deets = this.state.bugs.filter(object=>object.id === bug_id);
        // this.setState({deets:deets});

    }



    render(){

        return(

            <div className="container">
                <div className="row">


                        <div className="col-4 border p-4"><Project proj={this.state.projects} getProjectDetails={this.getProjectDetails}
                        getBugDetails={this.getBugDetails}/></div>
                        <div className="col-4 border p-4"><ProjectDetail details={this.state.details}/></div>
                        <div className="col-4 border p-4"><BugDetail details={this.state.details}/></div>
                        <Form proj={this.state.projects}/>

                </div>
                        <Button color="primary" onClick={this.toggleModal.bind(this)}>Add Bug</Button>
                        <Modal isOpen={this.state.modalIsOpen}>
                        <ModalHeader toggle={this.toggleModal.bind(this)}>Modal Title</ModalHeader>
                        <ModalBody>Body</ModalBody>
                        <ModalFooter>
                            <Button color="primary">Submit</Button>
                            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                        </ModalFooter>
                        </Modal>



            </div>

            )
    }

}


export default App;