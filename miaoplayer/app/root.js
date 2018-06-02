
import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

var createClass = require('create-react-class');
let Root=createClass({
	getInitialState(){
		return {
			progress:"-"
		}
	},
	componentDidMount(){
		$('#player').jPlayer({
			ready:function(){
			  $(this).jPlayer('setMedia',{
			  	mp3:''
			  }).jPlayer('play');	
			},
			supplied: 'mp3',
			wmode:'window'
		});
		$('#player').bind($.jPlayer.event.timeupdate,(e)=>{
           this.setState({
           	  progress: Math.round(e.jPlayer.status.currentTime)
           })
		});
	}
	render() {
	  return(
	  	<div>
			<Header/>	
			<Progress
	           progress={this.state.progress}
			></Progress>
		</div>
	  );
	}
});
export default Root;