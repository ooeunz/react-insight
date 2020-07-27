class StateSample extends React.Component {
  state = { myName: 'noah' };
  onClick = () => {
    this.setState({ myName: 'ooeunz' });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        내 이름은 {this.myName}
      </button>
    );
  }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(StateSample), domContainer);
