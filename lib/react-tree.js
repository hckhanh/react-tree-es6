import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jstree';

export default class ReactTree extends React.Component {
  componentDidMount(prevProps, prevState) {
    $('#container').jstree();
  }

  render() {
    return (
      <div id="container">
        <ul>
          <li>Root node
            <ul>
              <li>Child node 1</li>
              <li>Child node 2</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
