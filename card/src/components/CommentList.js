import React from 'react';
import './CommentList.css';

const CommentList =({ comments }) =>{
	return (
		<div className="commentList">
		    <div>评论列表:</div>
		    <ul className="list">
		      {comments.map((item,index) =>
	                      <li key={index}>{item}</li>
		                )}

		    </ul>	    
		</div>
	)
}
export default CommentList