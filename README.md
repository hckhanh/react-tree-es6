# react-tree-es6

[![Build Status](https://travis-ci.org/hckhanh/react-tree-es6.svg?branch=master)](https://travis-ci.org/hckhanh/react-tree-es6)
[![codecov](https://codecov.io/gh/hckhanh/react-tree-es6/branch/master/graph/badge.svg)](https://codecov.io/gh/hckhanh/react-tree-es6)
[![bitHound Overall Score](https://www.bithound.io/github/hckhanh/react-tree-es6/badges/score.svg)](https://www.bithound.io/github/hckhanh/react-tree-es6)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/288/badge)](https://bestpractices.coreinfrastructure.org/projects/288)

If you want to find a **tree view** component for [React](https://facebook.github.io/react/), this module is what you need.

## Getting Started

**It ONLY supports ES6 and above.** Read <https://hckhanh.github.io/react-tree-es6> for more details.

## Installation

```bash
npm install --save react-tree-es6
```

## Usage

```js
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

## License

MIT
