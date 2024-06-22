import { Component } from "react"
import { TodoList } from "./TodoList"

export default class  App extends Component {
  
  constructor(){
    super()
    this.state = {
      hideList : false
    }
  }

  render(){


    return (
      <>
      <button onClick={()=>{ this.setState({hideList : !this.state.hideList}) }}>Hide/unhide</button>
       {
        this.state.hideList == false ? <TodoList ></TodoList> : ""
       }
      </>
    )
  }

}
