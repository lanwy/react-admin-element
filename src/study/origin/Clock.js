import React from 'react';

export class ClockOne extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


  /** 
   state个人理解为vue中的data
   props 和 vue中的props类似， 即调用组件时传递过来的参数 
   */
  function FormattedDate(props) {
    return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
  }
   

  /**
   * componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
   * 类里面也可以直接使用 this.props
   */
  export class ClockTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    /**组件加载时 */
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
    /**组件卸载时 */
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
   
    tick() {
      this.setState({
        date: new Date()
      });
    }
   
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
          <br/>
          <h2>props的用法：</h2>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }