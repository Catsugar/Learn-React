import React from 'react';
import './TodoList.css';
class TodoList extends React.Component{
	addEvent (event){
      alert("1111")
	}
    render(){
        return (
            <div className="todolist">
                <div>记录每天要完成的事:</div>
                <input className="control" placeholder="请输入内容" />
                <button className="btn" onClick={this.addEvent}>记录</button>
                <ul className="list">
	              <li>1111111111111111</li>
	              <li>1111111111111111</li>
		        </ul>	 
            </div>

        )
    }
}
export default TodoList