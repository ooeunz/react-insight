import React from 'react';

class StateSample extends React.Component {
  state = { myName: 'noah' };
  onClick = () => {
    this.setState({ myName: 'ooeunz' });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        내 이름은 {this.state.myName}
      </button>
    );
  }
}

export default StateSample;