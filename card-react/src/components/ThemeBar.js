import React from 'react';
import './ThemeBar.css';
import ThemeContext from "../ThemeContext"
const ThemeBar = () => {
	return (
      <ThemeContext.Consumer>
        {
        	theme => {
        	  return (
        		<div className="stylebox" style={ {backgroundColor:theme.bgColor, color:theme.color} }>
	        		<h3>样式区域</h3>
	        		<button className={theme.classnames}>样式按钮</button>
        		</div>
        	  )
        	}
        }
      </ThemeContext.Consumer>
	)
}
export default ThemeBar