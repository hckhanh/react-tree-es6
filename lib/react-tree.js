import 'jstree/dist/themes/default/style.min.css';
import 'jstree/dist/themes/default-dark/style.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jstree';

export default class ReactTree extends React.Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).jstree({
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
