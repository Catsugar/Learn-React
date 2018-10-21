import React from 'react';
import './CommentBox.css';
class CommentBox extends React.Component{
	constructor(props){
		super(props)
		/*this.state={
			value:""
		}
		this.handleChange=this.handleChange.bind(this)*/
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}
	handleSubmit (event){
		//alert(event.target.value)
		event.preventDefault()
		alert(event.textInput.value)
	}
	render(){
		return (
		  <form className="commentbox" onSubmit={this.handleSumbit}>
		    <div className="comment">
		      <div>留言内容:</div>
		      <input 
		      type="text"  
		      className="control" 
		      placeholder="请输入内容"  ref={(textInput) => {this.textInput = textInput}}/>
		    </div>  
		    <button type="submit" className="btn" >留言</button>
		  </form>

		)
	}
}
export default CommentBox