import 'jstree/dist/themes/default/style.min.css';

import ReactDOM from 'react-dom';
import ReactTree from '../lib/react-tree';

const PROJECT_TREE = [
  {
    text: '.vscode',
    state: {
      opened: true,
      selected: true
    },
    children: [
      'settings.json'
    ]
  },
  {
    text: 'example',
    state: {
      opened: true,
    },
    children: [
      'app.js',
      'index.html'
    ]
  },
  {
    text: 'lib',
    state: {
      opened: true,
    },
    children: [
      'react-tree.js'
    ]
  },
  {
    text: 'node_modules',
    children: []
  },
  '.babelrc',
  '.gitignore',
  'jsconfig.json',
  'LICENSE',
  'package.json',
  'webpack.config.js'
];

ReactDOM.render(<ReactTree tree={PROJECT_TREE} />, document.getElementById('app'));
