# Full Example

```js
import React from 'react';
import ReactTree from 'react-tree-es6';

const CORE = {
  data: [
    'Simple root node',
    {
      text: 'Root node 2',
      state: {
        opened: true,
        selected: true
      },
      children: [
        {
          text: 'Child 1'
        },
        'Child 2'
      ]
    }
  ]
};

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
