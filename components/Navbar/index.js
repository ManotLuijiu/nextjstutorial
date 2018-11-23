import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a title="Buid up digital world">Home</a>
          </Link>
          <Link href="/about">
            <a title="About Us">About Us</a>
          </Link>
          <Link href="/api">
            <a title="Our Api">API</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
