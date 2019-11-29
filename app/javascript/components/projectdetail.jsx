import React from 'react'


class ProjectDetail extends React.Component {
    render(){
        console.log(this.props.details) // should give an array
        console.log(this.props.details[0]) // should give an object


       return(
            <div>

                {this.props.details.length > 0 ? (
                    <div>
                        <p>{this.props.details[0].project_title}</p>
                        <p>{this.props.details[0].user_id}</p>
                        <p>{this.props.details[0].start_date}</p>
                        <p>{this.props.details[0].end_date}</p>
                        <p>{this.props.details[0].status}</p>
                    </div>
                ) : ""}

            </div>

            )
    }
}

export default ProjectDetail;