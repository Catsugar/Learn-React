import React from 'react';
import './DigitalClock.css';
class DigitalClock extends React.Component{
	constructor(props){
		super(props)
		this.state={
			date:new Date()
		}
	}
	componentDidMount(){
		this.timer=setInterval(()=>{
          this.setState({
          	date:new Date()
          })
		},1000)
	}
	componentDidUpdate(currentState,state){
		//console.log(currentState);
	}	
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	render(){
		return (
		  <div className="clock">
             <h1>{this.state.date.toLocaleTimeString()}</h1>
		  </div>

		)
	}
}
export default DigitalClock