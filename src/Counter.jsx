import React from "react";

export  class Counter extends React.Component {

    constructor(props){
        console.log("Hi form counter construe");
        super(props)
        this.state = {
            counter:this.props.initialValue
        }
    }

    componentDidMount(){
        console.log("Counter componentDidMount ");
    }

    componentWillUnmount(){
        console.log("Counter componentWillUnmount ");
        this.props.setLastCounter(this.state.counter)
    }
    componentDidUpdate(){
        console.log("Counter componentDidUpdate ");
    }
    shouldComponentUpdate(){
        console.log("Counter shouldComponentUpdate ",this.state.counter);
        return this.state.counter > 5 ;
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