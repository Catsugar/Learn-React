import React from 'react';
import './LikeButton.css';
class LikeButton extends React.Component{
	constructor(props){
		super(props)
		this.state={
			likes:0
		}
	    //this.addLikes=this.addLikes.bind(this);
	}
	addLikes(){
		//console.log(this);
		this.setState({
			likes:++this.state.likes
		})
		
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