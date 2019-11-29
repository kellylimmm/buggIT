import React from 'react'


class BugDetail extends React.Component {
    render(){
        console.log("FROM THE BUG COMONENT")
        console.log(this.props.deets[0] ? this.props.deets[0].bug[0].bug_title : "" )// should give an array
        // console.log(this.props.deets[0]) // should give an object


       return(
            <div>
                <p>{this.props.deets[0] ? this.props.deets[0].bug[0].bug_title : "" }</p>
                <p>{this.props.deets[0] ? this.props.deets[0].bug[0].status ? "Open" : "Closed" : "" }</p>
                <p>{this.props.deets[0] ? this.props.deets[0].bug[0].due_date : "" }</p>

            </div>

            )
    }
}

export default BugDetail;