import React, {Component} from 'react';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    } 
    
    taskChange(e) {
        this.setState({
            task: e.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        console.log('Form.js:', this.state.task);
        this.props.onAddTask(this.state.task);   // send the task to app (parent)
        this.setState ({
            task: ''
        });
    }
    
    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <input value={this.state.task}
                        onChange={this.taskChange.bind(this)}/>
                <button>Add</button>
            </form>
            
        );
    }
}

export default AddTaskForm;