import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PoseGroup } from 'react-pose';
import './stylesheets/index.css'

//Components
import Background from './components/Background'
import Navbar from './components/Navbar'

//Páginas
import Intro from './pages/Intro'
import About from './pages/About'

//Animaciones
import { RoutesContainer } from './motions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Router>
          <Route render={({ location }) => (
            <div>
              <Navbar />
              <PoseGroup>
                <RoutesContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/about" component={About}/>
                  </Switch>
                </RoutesContainer>
              </PoseGroup>
            </div>
          )}/>
        </Router>
      </div>
    );
  }
}

export default App;
