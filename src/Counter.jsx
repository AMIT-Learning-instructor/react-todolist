import React from "react";

export  class Counter extends React.Component {

    constructor(){
        super()
        this.state = {
            counter:0
        }
    }
    render(){
        let name = "youssef";
        console.log("New Render")
        return (
            <>
                <h1> Hi {name} , Counter :{this.state.counter}</h1>
                <button onClick={()=>{
                   this.setState({counter: this.state.counter + 1})
                }} >+</button>
            </>
        )
    }
}