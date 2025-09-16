import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar">
        <ul className="left-nav d-flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

