import React from 'react';
import './CommentList.css';
import CommentBox from './CommentBox';
class CommentList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			comments:["呵呵哈哈哈或"]
		}
	}
	render(){
		return (
		  <div className="commentList">
		    <CommentBox />
		    <div>评论列表:</div>
		    <ul className="list">
		      {comments.map((comment,index) =>
                <li key={index} >{comment} </li>
		      )}
		    </ul>	    
		  </div>

		)
	}
}
export default CommentList