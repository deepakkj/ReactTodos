import React from 'react';
import ToDosList from './ToDosList';
import CreateToDo from './CreateToDo';

const todos = [
    {
        task: "Create Portfolio Site",
        isCompleted: true
    },
    {
        task: "Complete PF UAN work",
        isCompleted: false
    }
];

 export default class App extends React.Component {
     constructor(props){
     super(props);

     this.state = {
         todos: todos
     };    
     }
     
     //create a new item by updating the new item at the last in the array
     createItemInToDo(task){
         this.state.todos.push({task: task, isCompleted: false});
         this.setState({todos: this.state.todos});
     }
     
     changeTaskStatus(index){
         this.state.todos[index].isCompleted = !this.state.todos[index].isCompleted;
         console.log(this.state.todos[index].isCompleted);
         this.setState({todos: this.state.todos});
     }
  
     deleteTask(index){
         if(index > -1){
         this.state.todos.splice(index, 1);
         this.setState({todos: this.state.todos});
         }
     }
     
     updateCurrentTask(index, updatedTask){
         this.state.todos[index].task = updatedTask;
         this.setState({todos: this.state.todos});
         console.log("updated task--------", this.state.todos);
     }
     
     render(){
         return (
             <div>
             <h1>React ToDos App</h1>
             <CreateToDo createItemInToDo={this.createItemInToDo.bind(this)} />
             <ToDosList todos={this.state.todos} deleteTask={this.deleteTask.bind(this)} changeTaskStatus={this.changeTaskStatus.bind(this)} updateCurrentTask={this.updateCurrentTask.bind(this)} />
             </div>
         ); 
     } 
 }