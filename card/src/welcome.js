import React from 'react';
import './App.css';
import NameCard from './components/NameCard';
import DigitalClock from './components/DigitalClock';
class Welcome extends React.Component{
	render(){
		const todoList =['白宇','朱一龙','赵云澜','沈巍'];
		const isLogin=true;
		const test=<h1>你到底是啥呀？</h1>
		return (
			<div className="App">
                <div className="App-header">
	                <h2>惊魂一瞥，乱我心曲</h2>
	                <DigitalClock />
                </div>
                <NameCard name={"赵云澜"} job={"特调处处长"} number={123456789} ishuman={true} tags={["自以为攻","流氓","颜控"]}/>
                <NameCard name={"沈巍"} job={"龙城大学教授"} number={123456789} ishuman={false} tags={["惊鸿一瞥","美人攻","偏执","心头血"]}/>
                <NameCard name={"祝红"} job={"御姐"} number={123456789} ishuman={false} tags={["妈的死gay","御姐","蛇"]}/>
                <div className="try">
	              	{4+3}{[1,2,3]}{<p>你是笨蛋吗？</p>}
		            {isLogin? <p>你已经登录了呀！</p>:<p>你还没有登录呢？</p>}
		            {test}
		            <ul>
		                {todoList.map(item =>
	                      <li>{item}</li>
		                )}
		            </ul>
		        </div>
            </div>
		);
	}
}

export default Welcome