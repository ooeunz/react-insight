import React from 'react';
import Title from './Title';

class Todo extends React.Component {
  state = { count: 0 };
  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <Title title={`현재 카운트: ${count}`} />
        <button onClick={this.onClick}>증가</button>
      </div>
    );
  }
}

export default Todo;