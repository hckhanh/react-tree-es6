# react-tree-es6

[![Build Status](https://travis-ci.org/hckhanh/react-tree-es6.svg?branch=master)](https://travis-ci.org/hckhanh/react-tree-es6)
[![codecov](https://codecov.io/gh/hckhanh/react-tree-es6/branch/master/graph/badge.svg)](https://codecov.io/gh/hckhanh/react-tree-es6)
[![dependencies Status](https://david-dm.org/hckhanh/react-tree-es6/status.svg)](https://david-dm.org/hckhanh/react-tree-es6)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/288/badge)](https://bestpractices.coreinfrastructure.org/projects/288)

The wrapper of jsTree (jstree.com) for React

## Getting Started

If you want to find a **tree view** component for React, this module is what you need.
**It supports ES6 and backward compatible with ES5.**

## Installation

```bash
npm install --save react-tree-es6
```

## Usage

import/require `ReactTree` in your source code:

```js
import ReactTree from 'react-tree-es6';
```

and add this component into your `render()` function:

```js
render() {
  <ReactTree core={CORE} onChanged={this.handleOnChanged} />
}
```

**Go to [example](example) folder to get more details.**

### core

`core` is the jsTree object contains basic data and configurations of the tree.
This is an example of `core` object:

```js
{
  data: [ // data can be an array or object.
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
}
```

As you know, a tree has one or many nodes, here is the full structure of a node:

```js
// Alternative format of the node (id & parent are required)
{
  id: 'string' // required
  parent: 'string' // required
  text: 'string' // node text
  icon: 'string' // string for custom
  state: {
    opened: boolean  // is the node open
    disabled: boolean  // is the node disabled
    selected: boolean  // is the node selected
  },
  li_attr: { }  // attributes for the generated LI node
  a_attr: { }  // attributes for the generated A node
}
```

You can define a `core` object and then put it to `core` property:

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
  render() {
    return (<ReactTree core={CORE} />);
  }
}
```

**To make sure you can find what you need, go to [jsTree API](https://www.jstree.com/api) for more details.**

### onChanged

This is an event to handle when a node is clicked:

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

### Themes

If user want to apply css for **ReactTree**, consider to include these files to your web app:

* node_modules/jstree/dist/themes/**default**/style.min.css
* node_modules/jstree/dist/themes/**default-dark**/style.min.css

with additional options in `core` object, for instance with **default-dark** theme:

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
  ],
  themes: {
    name: 'default-dark'
  }
};
```

## License

MIT (<http://www.opensource.org/licenses/mit-license.php>)
