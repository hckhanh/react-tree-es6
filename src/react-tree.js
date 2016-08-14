import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jstree';

export default class ReactTree extends React.Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this))
      .on('changed.jstree', (e, data) => {
        if (this.props.onChanged) {
          this.props.onChanged(data.selected.map(
            item => data.instance.get_node(item)
          ));
        }
      })
      .jstree({
        core: {
          data: this.props.tree
        }
      });
  }

  render() {
    return (<div></div>);
  }
}

ReactTree.propTypes = {
  tree: function (props, propName, componentName) {
    const prop = props[propName];
    if (!Array.isArray(prop) && typeof (prop) !== 'object')
      return new TypeError(`Invalid prop \`tree\`: tree must be an object or array`)
  }
};
