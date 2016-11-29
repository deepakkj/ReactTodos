import React from 'react'; 

export default class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
    }
    
    //edit the todo task
    onEditClick(){
        this.setState({isEditing: true});
    }
    
    //save the todo task
    onSaveClick(){
        this.props.updateCurrentTask(this.props.index, this.refs.updateTaskInput.value);
        this.setState({isEditing: false});
    }
    
    //delete the todo task
    onDeleteClick(){
     //   console.log(this.props.index);
        this.props.deleteTask(this.props.index);
    }
    
    //toggle save or edit button
    renderSaveEditButton(){
        if(!this.state.isEditing){
        return ( <button onClick={this.onEditClick.bind(this)}>Edit</button> );
        }
        else{
        return ( <button onClick={this.onSaveClick.bind(this)}>Save</button> );
        }
    }
    
    //Change todo task status to either completed or not done on click of the todo task
    onTaskClick(){
    this.props.changeTaskStatus(this.props.index);
    }

    //Render the todo task
    renderTask(){
        const {task , isCompleted} = this.props;
       const taskStyle = {   color: isCompleted ? 'green' : 'red' ,
                        cursor: 'pointer'
                    };
        if(!this.state.isEditing){
        return (
             <td onClick={this.onTaskClick.bind(this)} style={taskStyle}>{task}</td>
        ); }
        else {
            return ( <td>
                <input placeholder={task} ref="updateTaskInput" />
                    </td>
            );
        }
    }
    
    //Render the Component
    render(){
        return (
                <tr>
               {this.renderTask()}
                <td>
                   {this.renderSaveEditButton()}
                    <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
                </td>
                </tr>
        );
    }
}