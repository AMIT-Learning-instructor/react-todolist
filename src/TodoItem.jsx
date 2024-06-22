import React, { Component } from 'react'

export default class TodoItem extends Component {

  render() {
    return (
      <>
        <input type="checkbox" checked={this.props.isChecked } onChange={this.props.toggleCheck} />
        {this.props.isChecked ? <del>{this.props.title }</del> : <>{this.props.title }</> }
      </>
    )
  }
}
