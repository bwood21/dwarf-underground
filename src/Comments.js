import Rect, {Component} from 'react'

class Comments extends Component {
    render(){
        return (
            <div>
                <textarea placeholder="Enter a comment"></textarea>
                <button className = "button">Submit Comment</button>
            </div>
        )
    }
}

export default Comments