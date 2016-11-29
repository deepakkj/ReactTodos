import React from 'react';

export default class CreateToDo extends React.Component{
    onCreate(e){
        e.preventDefault();
       this.props.createItemInToDo(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
    render(){
        return (
            <form onSubmit={this.onCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }
}