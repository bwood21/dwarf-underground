import React, {Component} from 'react'

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment:'',
            comments:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    handleChange(ev){
            this.setState({
                comment : ev.target.value
            })
    }

    addComment(ev){
            
    }

    render(){
        return (
            <div>
                <textarea placeholder="Enter a comment"></textarea>
                <button className = "button" onClick={this.addComment}>Submit Comment</button>
            </div>
        )
    }
}

export default Comments