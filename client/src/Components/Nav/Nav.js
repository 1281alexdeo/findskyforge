import React, { Component } from 'react';
import './_nav.scss';

export class Nav extends Component {
  state = {
    activeIndex: 0
  };
  toggleClass(index, e) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top  py-3">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item active ">
              <a
                onClick={this.toggleClass.bind(this, 0)}
                href="#home"
                className={
                  this.state.activeIndex === 0 ? 'active nav-link' : 'nav-link'
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  this.state.activeIndex === 1 ? 'active nav-link' : 'nav-link'
                }
                onClick={this.toggleClass.bind(this, 1)}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.toggleClass.bind(this, 2)}
                className={
                  this.state.activeIndex === 2 ? 'active nav-link' : 'nav-link'
                }
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  this.state.activeIndex === 3 ? 'active nav-link' : 'nav-link'
                }
                onClick={this.toggleClass.bind(this, 3)}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
