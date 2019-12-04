import React from 'react'


class ProjectDetail extends React.Component {
    render(){
        console.log(this.props.details) // should give an array
        // console.log(this.props.details[0].bug) // should give an object


       return(
            <div>

                {this.props.details.length > 0 ? (
                    <div class="container1">

                        <p>Project Title:  {this.props.details[0].project_title}</p>

                        <p>Number of Bugs: {this.props.details[0].bug.length}</p>

                        <p>Start Date: {this.props.details[0].start_date}</p>

                        <p>End Date: {this.props.details[0].end_date}</p>

                        <p>Status:  {this.props.details[0].status}</p>



                    </div>
                ) : ""}

            </div>

            )
    }
}

export default ProjectDetail;