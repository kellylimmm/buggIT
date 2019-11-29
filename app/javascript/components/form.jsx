import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bugsname: "",
            comments:"",
            priority:"low",
            // project:"",
            dueDate: new Date()

        }
    }

    // handleProjectsChange = (event) => {
    //         this.setState({
    //         project:event.target.value
    //     })
    // }

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

    handleSubmit = event => {
        alert(` ${this.state.project_id} ${this.state.bugsname} ${this.state.comments} ${this.state.dueDate} ${this.state.priority}`)
        event.preventDefault()
    }



    render(){

        const projectOptions = this.props.proj.map(project=>{
            return(
                <option value={project.project_title}>
                {project.project_title}
                </option>
                )
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <div>

                <h3>Log a bug</h3>

                <label>Project</label>
                    <select value={this.props.project_id} onChange={this.handleProjectChange}>
                       {projectOptions}
                    </select>


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


                </div>
                <button type="submit">Submit</button>
            </form>

            )
    }
}

export default Form;