import React, { Component } from 'react'

 class TodoItem extends Component {
    
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div>
                 <div className="todo-item">
                    <input type="checkbox" checked={this.props.item.completed}  onChange={()=>this.props.handleOnChange(this.props.item.id)}/>
                    <p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
                </div>
            </div>
        )
    }
}
export default TodoItem