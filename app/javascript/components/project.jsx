import React from 'react'
import axios from 'axios';

class Project extends React.Component{
    constructor(){
        super();

    }

    handleClick(e,project_id){
        this.props.getProjectDetails(project_id);
    }



    render(){
        const projectList = this.props.proj.map(project=><p onClick={(e)=>{this.handleClick(e,project.id)}}>{project.project_title}</p>)
        return(

            <div>

                {projectList}

            </div>



            )
    }

}


export default Project;