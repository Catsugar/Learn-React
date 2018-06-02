import React from 'react'
import './progress.less'
var createClass = require('create-react-class');
let Progress=createClass({
	render() {
	  return(
		<div className="Progress-component row">
           {this.props.progress}秒
		</div>	  	
	  );
	}
});
export default Progress;