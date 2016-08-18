# Get Started

## Installation

```js
npm install --save react-tree-es6
```

Keep in mind that this module has *two peer dependencies* (**reat** and **react-dom**).
It *only* support for **ES6 and above**, because I decide to move forward.
The source code from this module is written in ES6 and compiled to ES5.

Please upgrade to **{{ config.version }}** to support [jsTree API](https://www.jstree.com/api)
better than ~~v0.x~~.

## Usage

import `ReactTree` in your code:

```js
import ReactTree from 'react-tree-es6';
```

then, add to `render()` function:

```js
render() {
  return (<ReactTree core={CORE} onChanged={this.handleOnChanged} />);
}
```
