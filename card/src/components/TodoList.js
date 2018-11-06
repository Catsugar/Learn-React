import React from 'react';
import './TodoList.css';
class TodoList extends React.Component{
	constructor(props){
      super(props);
      this.state={
        events:['看昙花开出什么颜色',
                '和鲸鱼一起陆行',
                '去看长颈鹿勃勃的演唱会。'],
        inputValue: ''
      }
      this.addEvent=this.addEvent.bind(this)
    }
    addEvent (){
      this.setState({
        events: [...this.state.events,inputValue]
      })
	}
    inputChange(e){
      this.setState({
        inputValue: e.target.value()
      })
    }
    render(){
        return (
            <div className="todolist">
                <div>记录每天要完成的事:</div>
                <input className="control" onChange={this.inputChange} ref={(textInput) => {this.textInput = textInput}} placeholder="请输入内容" />
                <button className="btn" onClick={this.addEvent.bind(this)}>记录</button>
                <ul className="list">
                  {this.state.events.map((item,index) =>
                          <li key={index}>{item}</li>
                        )}
		        </ul>	 
            </div>

        )
    }
}
export default TodoList