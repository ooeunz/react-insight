function Title(props) {
  return <p>{props.title}</p>
}
export default React.memo(Title);

export default class Title extends React.PureComponent {
  render() {
    return <p>{this.props.title}</p>;
  }
}