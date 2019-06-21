import React, { Component } from 'react';
import Loading from './Loading';

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data, isLoading: false }))
  }
  render() {
    const { isLoading, data } = this.state;
    if (isLoading) {
      return <Loading />
    }
    return (
      <div>
        {this.props.render(data)}
      </div>
    );
  }
}

export default Fetch;

