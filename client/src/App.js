import React, { Component, lazy, Suspense } from 'react';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Project/Projects';
// import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import ReallySmoothScroll from 'really-smooth-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
const About = lazy(() => import('./Components/About/About'));

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <ScrollableAnchor id={'home'}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <Suspense fallback={<div>Loading.....</div>}>
            <About />
          </Suspense>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </>
    );
  }
}

export default App;
