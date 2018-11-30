import React from 'react';
import './Welcome.css';
import NameCard from './components/NameCard';
import DigitalClock from './components/DigitalClock';
import CommentList from './components/CommentList';
import CommentBox from './components/CommentBox';
import ThemeContext from './ThemeContext';
import ThemeBar from './components/ThemeBar';
/*redux*/
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const themes={
	light:{
		classnames:"red",
		bgColor:'#F03',
		color:"#000"
	},	
	dark:{
		classnames:"blue",
		bgColor:'#69F',
		color:"#fff"
	},
}
class Welcome extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			theme: 'light',
			comments: ["初见昆仑君，惊鸿一瞥，乱我心曲","跨越时间，你在原地","我始终在原地，等一个消息"]
		}
		this.addComment=this.addComment.bind(this)
		this.changeTheme=this.changeTheme.bind(this)
	}
	addComment(comment){
      this.setState({
      	comments: [...this.state.comments,comment]
      })
	}
	changeTheme(theme){
      this.setState({
      	theme,
      })
	}	
	render(){
		const {comments}=this.state;
		return (
		  <ThemeContext.Provider value={themes[this.state.theme]}>
			<div className="App">
                <div className="App-header">
	                <h2>惊魂一瞥，乱我心曲</h2>
	                <a href="#theme-switcher" className="red" onClick={() => {this.changeTheme('light')}}>浅色主题</a>
	                <a href="#theme-switcher" className="blue" onClick={() => {this.changeTheme('dark')}}>深色主题</a>
	                <ThemeBar/>
	                <DigitalClock />
	                <div className="section">
		                <div className="left">
			                <CommentBox commentLength={comments.length} onAddComment={this.addComment}/>
			                <CommentList  comments={comments} />
			            </div>
			            <div className="right">
			              <div className="todolist">
		                    <AddTodo />
						    <VisibleTodoList />
						    <Footer />
						  </div>
		                </div>
	                </div>
                </div>
                <NameCard name={"赵云澜"} job={"特调处处长"} number={123456789} ishuman={true} tags={["自以为攻","流氓","颜控"]}/>
                <NameCard name={"沈巍"} job={"龙城大学教授"} number={123456789} ishuman={false} tags={["惊鸿一瞥","美人攻","偏执","心头血"]}/>
                <NameCard name={"祝红"} job={"御姐"} number={123456789} ishuman={false} tags={["妈的死gay","御姐","蛇"]}/>
                <NameCard name={"郭长城"} job={"小锅巴"} number={123456789} ishuman={false} tags={["胆小啊","灯芯","没事烧烧"]}/>
            </div>
          </ThemeContext.Provider>
		);
	}
}
export default Welcome