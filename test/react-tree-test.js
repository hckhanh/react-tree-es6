import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactTree from '../src/react-tree';
import { PROJECT_TREE } from '../example/project-tree';

const CORE_DATA = {
  data: PROJECT_TREE
};

describe('ReactTree', () => {
  it('should run be rendered', () => {
    const reactTree = TestUtils.renderIntoDocument(
      <ReactTree core={CORE_DATA} />
    );

    const reactTreeNode = ReactDOM.findDOMNode(reactTree);

    expect(reactTreeNode.textContent).not.toBeNull();
    expect(ReactTree.propTypes.core).toBeDefined();
  });

  it('should run the handle function of onChanged event', () => {
    const handleOnChanged = jest.fn();

    const reactTree = TestUtils.renderIntoDocument(
      <ReactTree core={CORE_DATA} onChanged={handleOnChanged} />
    );

    expect(handleOnChanged).toBeCalled();
  });

  it('should throw TypeError when "core" prop is not valid', () => {
    const renderReactTree = () => {
      TestUtils.renderIntoDocument(<ReactTree core={1} />);
    };

    expect(renderReactTree).toThrowError(TypeError);
  });
});
