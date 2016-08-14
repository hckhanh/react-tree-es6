import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactTree from '../src/react-tree';
import { PROJECT_TREE } from '../example/project-tree'

describe('ReactTree', () => {
  it('should run be rendered', () => {
    const reactTree = TestUtils.renderIntoDocument(
      <ReactTree tree={PROJECT_TREE} />
    );

    const reactTreeNode = ReactDOM.findDOMNode(reactTree);

    expect(reactTreeNode.textContent).not.toBeNull();
  });
});
