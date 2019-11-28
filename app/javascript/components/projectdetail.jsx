import React from 'react'


class ProjectDetail extends React.Component {
    render(){

        return(
            <div>
                <p>{this.props.details? this.props.details.project_title : ""}</p>
                <p>{this.props.details? this.props.details.user_id : ""}</p>
                <p>{this.props.details? this.props.details.start_date : ""}</p>
                <p>{this.props.details? this.props.details.end_date : ""}</p>

            </div>

            )
    }
}

export default ProjectDetail;