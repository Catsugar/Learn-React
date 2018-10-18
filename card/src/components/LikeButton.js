import React from 'react';
import './CommentBox.css';
class LikeButton extends React.Component{
	constructor(props){
		
	}

	render(){
		return (
		  <div className="button">
			  <button type="button" onClick={() =>{this.addLikes()}} ></button>
			  <b>{this.state.likes}</b>
		  </div>

		)
	}
}
export default LikeButton