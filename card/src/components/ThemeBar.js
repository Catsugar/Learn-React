import React from 'react';
import ThemeContext from "../ThemeContext"
const ThemeBar = () => {
	return (
      <ThemeContext.Consumer>
        {
        	theme => {
        		<div
        		className="alert"
        		style={{backgroundColor:theme.bgColor,
        			    color:theme.color}}
        		></div>
        	}
        }
      </ThemeContext.Consumer>
	)
}
export default ThemeBar