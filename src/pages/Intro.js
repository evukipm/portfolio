import React, { Component } from 'react'
import '../stylesheets/intro.css'
import { Page } from '../motions'

class Intro extends Component {

  state = {
    isOpen: false,
  }

  displayIcons = () => {
    const { isOpen } = this.state
    this.setState({isOpen: !isOpen})
  }

  render() {
    const { isOpen } = this.state
    const iconClass = isOpen ? 'menu-icon open' : 'menu-icon close'
    return (
      <Page className="container intro">
        <div className={`icon-menu1 ${iconClass}`}>A</div>
        <div className={`icon-menu2 ${iconClass}`}>B</div>
        <div onClick={this.displayIcons} className="menu-boton">
          <h2>Hi!</h2>
          <p>Click me</p>
        </div>
        <div className={`icon-menu3 ${iconClass}`}>C</div>
        <div className={`icon-menu4 ${iconClass}`}>D</div>
      </Page>
    )
  }
}

export default Intro;

