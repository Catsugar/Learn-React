import React from 'react';
import './CommentBox.css';
class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.state={
			value:""
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}
	handleSubmit (event){
		alert(event.target.value)
		event.preventDefault()
	}
	render(){
		return (
		  <form className="commentbox" onSubmit={this.handleSumbit}>
		    <div className="comment">
		      <div>留言内容:</div>
		      <input type="text" onChange={this.handleChange} className="control" placeholder="请输入内容" value={this.state.value} />
		    </div>  
		    <button type="submit" className="btn" onSubmit={this.handleSumbit}>留言</button>
		  </form>

		)
	}
}
export default CommentBox