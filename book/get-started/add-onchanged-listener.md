# Add onChanged Listener

This event will be triggered when a node is clicked:

```js
class ExampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.handleOnChanged = this.handleOnChanged.bind(this);
  }

  handleOnChanged(changedItems) {
    this.setState({
      items: changedItems.map(item => item.text).join(', ')
    });
  }

  render() {
    return (
      <div>
        <ReactTree core={CORE} onChanged={this.handleOnChanged} />
        <div>Selected items: {this.state.items}</div>
      </div>
    );
  }
}
```
