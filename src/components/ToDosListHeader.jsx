import React from 'react'; 

export default class ToDosListHeader extends React.Component {
    render(){
        return (
                <thead>
            <tr>
            <td>Task</td>
            <td>Action</td>
            </tr>
            </thead>
        );
    }
}