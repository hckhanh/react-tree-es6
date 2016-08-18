# Themes

If user want to apply css for **ReactTree**, consider to include these files to your web app:

* node_modules/jstree/dist/themes/**default**/style.min.css
* node_modules/jstree/dist/themes/**default-dark**/style.min.css

with additional options in `core` object, for instance with **default-dark** theme:

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
  ],
  themes: {
    name: 'default-dark'
  }
};
```

If you are using React ES6 with [webpack](https://github.com/webpack/webpack),
you can add these themes easily by using [css-loader](https://github.com/webpack/css-loader):

```js
import 'node_modules/jstree/dist/themes/default/style.min.css';
import 'node_modules/jstree/dist/themes/default-dark/style.min.css';
```

*You only need to `import` these themes one time.*
