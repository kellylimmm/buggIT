import React from 'react'


class BugDetail extends React.Component {
    render(){

        console.log("FROM THE BUG COMPONENT")
        // console.log(this.props.details[0].bug)
        let bugs = this.props.details[0] ? this.props.details[0].bug.map((bug) =>{
            const url = "/bugs/"+bug.id
           return(
            <div>

                <a href={url}>Bug Title: {bug.bug_title}</a>

                <p>Status: {bug.status ? "Open" : "Closed"}</p>
                <p>Due Date: {bug.due_date}</p>
                <p >Severity: {bug.severity}</p>
                <hr/>
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