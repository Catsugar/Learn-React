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
        events: [...this.state.events, this.state.inputValue],
        inputValue: ''
      })
      this.inputChange=this.inputChange.bind(this);
      this.addEvent=this.addEvent.bind(this);
	}
    inputChange(e){
      this.setState({
        inputValue: e.target.value
      })
    }
    itemClick(index){
        console.log(index);
        const events= [...this.state.events];
        events.splice(index,1)
        this.setState({
            events:events
        })

    }
    render(){
        return (
            <div className="todolist">
                <div>记录每天要完成的事:</div>
                <input value={this.state.inputValue} className="control" onChange={this.inputChange} placeholder="请输入内容" />
                <button className="btn" onClick={this.addEvent}>记录</button>
                <ul className="list">
                  {this.state.events.map((item,index) =>
                          <li key={index} onClick={this.itemClick.bind(this,index)}>{item}</li>
                        )}
		            </ul>	 
            </div>

        )
    }
}
export default TodoList