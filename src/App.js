import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Column flexGrow={1} vertical='center'>
            <Row horizontal='center'>
              <h1 className='main-title'>Deciding To Do Better</h1>
            </Row>

            <Row horizontal='center'><HoverCircle text='2019'></HoverCircle>
              <HoverCircle text='Progress'></HoverCircle>
              <HoverCircle text='About'></HoverCircle></Row>

          </Column>
        </header>
      </div>
    );
  }
}

class HoverCircle extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
    this.text = props.text
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
        <Column className='label-col'>
        <div className='circle'
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
        </div>
        {
          this.state.isHovering &&
          <div>{this.text}</div>
        }
        {
          !this.state.isHovering &&
          <div>&nbsp;</div>
        }
        </Column>
    );
  }
}

export default App;


{/* <Column flexGrow={1} horizontal='center'>
<div className='circle'></div>
</Column>
<Column flexGrow={1} horizontal='center'>
<h3> Column 2 </h3>
<span> column 2 content </span>
</Column> */}