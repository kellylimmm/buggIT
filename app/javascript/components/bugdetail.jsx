import React from 'react'


class BugDetail extends React.Component {
    render(){

        console.log("FROM THE BUG COMPONENT")

        // console.log(this.props.details[0].bug)
        let bugs = this.props.details[0] ? this.props.details[0].bug.map((bug) =>{
            const url = "/bugs/"+bug.id
           return(
            <a href={url}>
            <div>


                <p>Bug Title: {bug.bug_title}</p>
                <br/>
                <p>Status: {bug.status ? "Closed" : "Open"}</p>
                <p>Due Date: {bug.due_date}</p>
                <p >Severity: {bug.severity}</p>
                <hr/>
            </div>
            </a>
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