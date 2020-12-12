import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './Counter.css'



class Counter extends Component{
  constructor() {
    super();    // usually people dpo error here, always put a super() herre the only type stuff in constructor
    this.state= {
      counter : 0

    }

    this.increment= this.increment.bind(this);    //but using an arrow function means no need for binding, but here well use normal and binding only
    this.decrement= this.decrement.bind(this);
    this.reset= this.reset.bind(this);

  }


  render() {
    return (
      <div className="counter">
      <header className="App-header">
      <CounterButton by={1} incrementMethod= {this.increment} decrementMethod= {this.decrement}/>
      <CounterButton by={5} incrementMethod= {this.increment} decrementMethod= {this.decrement}/>
      <CounterButton by={10} incrementMethod= {this.increment} decrementMethod= {this.decrement}/>
      <span className="count">{this.state.counter}</span>
      <div><button className="reset" onClick={this.reset}> Reset </button> </div>


      </header>


      </div>
    );
  }

  reset(){


    this.setState(
      (prevState) => {
      return {counter: 0}
    });

  }


  increment(by){
   console.log("increment from parent")

   this.setState(
     (prevState) => {
     return {counter: prevState.counter + by}
   })
 }

 decrement(by){
  console.log("increment from parent")

  this.setState(
    (prevState) => {
    return {counter: prevState.counter - by}
  })
}



}
class CounterButton extends Component{
  constructor() {
    super();    // usually people dpo error here, always put a super() herre the only type stuff in constructor
    // this.state= {
    //   counter : 0
    //
    // }
    //
    // this.increment= this.increment.bind(this);    //but using an arrow function means no need for binding, but here well use normal and binding only
    // this.decrement= this.decrement.bind(this);    //but using an arrow function means no need for binding, but here well use normal and binding only
  }

  render() {
    return (
      <div className = "counter" >
       <button onClick={() =>this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>
       <button onClick={() =>this.props.decrementMethod(this.props.by)}> -{this.props.by} </button>



      </div>
    );
  }

//   increment(){
//    console.log("vichu is awesome.")
//
//    // this.state.counter++;  // bad practice
//
//    this.setState({
//      counter: this.state.counter + this.props.by
//    })
//
//    this.props.incrementMethod(this.props.by);
//  }
//
//
//  decrement(){
//   console.log("vichu is awesome.")
//
//   // this.state.counter++;  // bad practice
//
//   this.setState({
//     counter: this.state.counter - this.props.by
//   })
//
//   this.props.decrementMethod(this.props.by);
// }


// Counter.defaultProps = {
//   by : 1
// }



}




export default Counter;
