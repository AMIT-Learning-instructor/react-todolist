import { Component } from "react"
import  {Counter}  from "./Counter"

export default class  App extends Component {

 render(){
  let hide = true;
  //   if(!hide == false){
  //     return( )
  // }

  return (
    <>
      <button>Hide / UnHide</button>
      {/* {hide == true ? <Counter  /> : ""} */}
      {hide == true && <Counter  />}
    </>
  )
 }
}
