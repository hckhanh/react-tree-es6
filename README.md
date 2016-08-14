# react-tree-es6

[![Build Status](https://travis-ci.org/hckhanh/react-tree-es6.svg?branch=master)](https://travis-ci.org/hckhanh/react-tree-es6)

The wrapper of jsTree (jstree.com) for React

## Getting Started

If you want to find a **tree view** component for React, this module is what you need.

## Installation

```bash
npm install --save react-tree-es6
```

## Usage

import/require `ReactTree` to your React source code:

```js
import ReactTree from 'react-tree-es6';
```

### tree

**tree** is the node object or and array of node object. This is an example of data of a node:

```js
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
```

Here is the full structure of a node:

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

You can define a tree and then parse it to `tree` property:

```js
const TREE = [
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
];

class ExampleApp extends React.Component {
  render() {
    return (<ReactTree tree={TREE} />);
  }
}
```

### onChanged

This is an event to handle when a node is clicked:

```js
const TREE = [
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
];

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
        <ReactTree tree={TREE} onChanged={this.handleOnChanged} />
        <div>Selected items: {this.state.items}</div>
      </div>
    );
  }
}
```

If you need detailed example, go to [example](example) folder.

### Themes

If user want to apply css for **ReactTree**, consider to include these files:

* node_modules/jstree/dist/themes/default/style.min.css
* node_modules/jstree/dist/themes/default-dark/style.min.css
