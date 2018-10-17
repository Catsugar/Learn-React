import React from 'react';
import './DigitalClock.css';
class DigitalClock extends React.Component{
	constructor(props){
		super(props)
		this.state={
			date:new Date()
		}
	    //this.addLikes=this.addLikes.bind(this);
	}
	addLikes(){
		this.setState({
		})
	}
	render(){
		return (
		  <div className="clock">
             <h1>{this.state.date.tolocaleTimeString()}</h1>
		  </div>

		)
	}
}
export default DigitalClock