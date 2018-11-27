import React from 'react';
import './CommentBox.css';
class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleSubmit (event){
		this.props.onAddComment(this.textInput.value)
		event.preventDefault()
	}
	render(){
		return (
		  <form className="commentbox" onSubmit={this.handleSubmit}>
		    <div className="comment">
		      <div>留言内容:</div>
		      <input 
		      type="text"  
		      className="control" 
		      placeholder="请输入内容"  
		      ref={(textInput) => {this.textInput = textInput}}/>
		    </div>  
		    <span className="number" >已有{this.props.commentLength}条评论</span>
		    <button type="submit" className="btn" >留言</button>
		    <hr/>
		   </form>

		)
	}
}
export default CommentBox