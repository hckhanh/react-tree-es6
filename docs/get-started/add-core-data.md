# Add core data

[`core`](https://www.jstree.com/api/#/?q=core) is the jsTree object contains basic
data and configurations of the tree. This is an example of `core` object:

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

## Node Format

As you know, *a tree has one or many nodes, each node has one or many child nodes*:

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

You can define a `core` object and use with `core` property:

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
