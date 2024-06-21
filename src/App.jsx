import { Component } from "react"
import  {Counter}  from "./Counter"

export default class  App extends Component {


  constructor(){
    super()
    console.log("hi from Constructor");
    this.state = {
      hide:false,
      lastCounter:0
    }
  }

  handelHide = () =>{
    this.setState({
      hide: !this.state.hide
    })
  }
  render(){
    console.log("ho form render");
    let setLastCounter = (counter)=>{
      this.setState({lastCounter:counter})
    }
    return (
      <>
        <button onClick={this.handelHide}>Hide / UnHide</button>
        {/* {hide == true ? <Counter  /> : ""} */}
        {this.state.hide == true && <Counter initialValue={this.state.lastCounter} setLastCounter={setLastCounter}  />}
      </>
    )
  }
}
