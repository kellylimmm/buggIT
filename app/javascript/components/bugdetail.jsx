import React from 'react'


class BugDetail extends React.Component {
    render(){
        console.log("FROM THE BUG COMONENT")
        // console.log(this.props.details[0].bug)
        let bugs = this.props.details[0] ? this.props.details[0].bug.map((bug) =>{
           return(
            <div>

                <p>Bug Title: {bug.bug_title}</p>
                <p>Status: {bug.status ? "Open" : "Closed"}</p>
                <p>Due Date: {bug.due_date}</p>
                <p>Severity: {bug.severity}</p>
            </div>
            )
        }) : "" // should give an array
        // console.log(this.props.deets[0]) // should give an object


       return(
            <div>
                {bugs}
            </div>

            )
    }
}

export default BugDetail;