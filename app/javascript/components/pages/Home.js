import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('props: ', this.props)
    return (
      <>
        <h3>Welcome!</h3>
        <p>Pee on walls it smells like breakfast behind the couch, so found somthing move i bite it tail bury the poop bury it deep scratch me now! stop scratching me! so step on your keyboard while you're gaming and then turn in a circle . Prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot cat playing a fiddle in hey diddle diddle? lick the plastic bag grass smells good.</p>
        <button><a href={this.props.sign_in} className="nav-link">Sign In</a></button>
        <button><a href={this.props.sign_up} className="nav-link">Sign Up</a></button>
      </>
    )
  }
}
