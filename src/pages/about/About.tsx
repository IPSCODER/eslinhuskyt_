import React, { Component } from 'react';

interface state {
  name: string;
}

class About extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'John Doe',
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>About {this.state.name} </h1>
      </div>
    );
  }
}

export default About;
