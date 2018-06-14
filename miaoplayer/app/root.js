
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
			  	mp3:'http://data.5sing.kgimg.com/G124/M01/0E/01/HIcBAFsgfY2AZeRKAJ_jQDYCFtQ186.mp3'
			  }).jPlayer('play');	
			},
			supplied: 'mp3',
			wmode:'window'
		});
		$('#player').bind($.jPlayer.event.timeupdate,(e)=>{
           this.setState({
           	  progress: Math.round(e.jPlayer.status.currentTime)
           });
		});
	},
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