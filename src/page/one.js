import React from 'react';
import { Link } from 'react-router-dom';
import Two from './two';

class One extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleClick(){
    this.props.history.push({
      pathname: "/two",
      state: { text: this.state.text }
  });
  }

  render(){
    return(
      <div>
        test_one<br/>
      <input type='text' value={this.state.text} onChange={this.handleChange}></input>
        <p>{this.state.text}</p>
          <button onClick={this.handleClick}>画面遷移します</button>
        // <Link to='/two'>twoへ</Link>
      </div>
    )
  }
}

export default One;
