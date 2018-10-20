import React from 'react';
import './NameCard.css';
import LikeButton from './LikeButton';
class NameCard extends React.Component{
	render(){
		const {name,job,number,ishuman,tags}=this.props
		return (
			<div className="card">
              <h1>{name}</h1>
              <ul>
                <li>职位：{job}</li>
                <li>电话：{number}</li>
                <li>物种：{ishuman ? '海星人' : '地星人'}</li>
              </ul>
              <div className="tags">好友印象：{tags.map(item =>
	                      <span>{item}</span>
		                )}
		      </div>
		      <LikeButton/>
			</div>

		)
	}
}
export default NameCard