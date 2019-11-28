import React from 'react'
import axios from 'axios';
import Project from './project'
import ProjectDetail from './projectdetail'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            projects:[],
            details: null
        }

        this.getProjectDetails = this.getProjectDetails.bind(this);
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



    render(){

        return(

            <div className="container">
                <div className="row">


                        <div className="col-4 border p-4"><Project proj={this.state.projects} getProjectDetails={this.getProjectDetails}/> </div>
                        <div className="col-4 border p-4"><ProjectDetail details={this.state.details}/></div>



                </div>

            </div>


            )
    }

}


export default App;