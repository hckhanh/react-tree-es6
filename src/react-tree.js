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
        core: this.props.core
      });
  }

  render() {
    return (<div></div>);
  }
}

ReactTree.propTypes = {
  core: function (props, propName, componentName) {
    const core = props[propName];
    if (!core || typeof (core) !== 'object')
      return new TypeError(`Invalid prop \`core\`: must follow jsTree API, read more https://www.jstree.com/api/#/?q=core`)

    const data = core.data;
    if (!Array.isArray(data) && typeof (data) !== 'object')
      throw new TypeError(`Invalid object \`core.data\`: must be array of object of jsTree JSON data, read more https://www.jstree.com/docs/json`)
  }
};
