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

  it('should run the handle function of onChanged event', () => {
    const handleOnChanged = jest.fn();

    const reactTree = TestUtils.renderIntoDocument(
      <ReactTree tree={PROJECT_TREE} onChanged={handleOnChanged} />
    );

    expect(handleOnChanged).toBeCalled();
  });

  it('should show error when tree is not object or array', () => {
    const reactTree = TestUtils.renderIntoDocument(
      <ReactTree tree={1} />
    );

    expect(ReactTree.propTypes.tree).toBeDefined();
  });
});
