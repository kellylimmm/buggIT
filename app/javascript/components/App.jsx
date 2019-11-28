import React from 'react'
import axios from 'axios';
import Project from './project'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            projects:[],
            details:null
        }
    }

    componentDidMount(){
        const url = "/projects"
        axios.get(url).then(result).catch(whenError);

        this.setState({projects:result})
    }

    getProjectDetails(project_id){
        const details = this.state.projects.filter(obj=>obj.id === project_id);
        this.setState({details:details});
    }

    render(){

        return(

            <div className="container">
                <div className="row">


                        <div className="col-4 border p-4"><Project proj={this.state.projects} getProjectDetails={this.getProjectDetails}/>
                        <div className="col-4 border p-4"><ProjectDetail details={this.state.details}/>
                        <select>
                        </select>


                </div>

            </div>


            )
    }

}


export default App;