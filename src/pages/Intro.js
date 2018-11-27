import React, { Component } from 'react'
import '../stylesheets/intro.css'
import { Page } from '../motions'

//icons
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import devto from '../images/dev-to.svg'

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
        <div className={`icon-menu1 ${iconClass}`}>
          <a href="">
            <img src={github} className="icon" alt="github icon" />
          </a>
        </div>
        <div className={`icon-menu2 ${iconClass}`}>
          <a href="">
            <img src={linkedin} className="icon" alt="linkedin icon" />
          </a>
        </div>
        <div onClick={this.displayIcons} className="menu-boton">
          <h2>Hi!</h2>
          <p>Click me</p>
        </div>
        <div className={`icon-menu3 ${iconClass}`}>
          <a href="">
            <img src={twitter} className="icon" alt="twitter icon" />
          </a>
        </div>
        <div className={`icon-menu4 ${iconClass}`}>
          <a href="">
            <img src={devto} className="icon" alt="dev-to icon" />
          </a>
        </div>
      </Page>
    )
  }
}

export default Intro;

