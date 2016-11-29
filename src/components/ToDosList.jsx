import React from 'react';
import ToDosListHeader from './ToDosListHeader';
import TodoItem from './TodoItem';

export default class ToDosList extends React.Component {
    renderItems(){
        return this.props.todos.map((todo,index) => <TodoItem key={index} {...todo} index={index} deleteTask={this.props.deleteTask} changeTaskStatus={this.props.changeTaskStatus} updateCurrentTask={this.props.updateCurrentTask} /> );
    }
    render(){
        return (
            <table>
               <ToDosListHeader />
               <tbody>{this.renderItems()}</tbody>
            </table>
        );
    }
}