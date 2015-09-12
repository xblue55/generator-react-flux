# generator-react-flux

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-react-flux from npm, run:

```bash
npm install -g generator-react-flux
```

Finally, initiate the generator:

```bash
mkdir example
cd example
yo react-flux
```

### Directory structure
```
.
├── app
│   ├── actions
│   │   └── .gitkeep
│   ├── assets
│   │   ├── fonts
│   │   │   └── .gitkeep
│   │   ├── images
│   │   │   └── logo.svg
│   │   └── styles
│   │       ├── _animations.scss
│   │       ├── app.scss
│   │       ├── _mixins.scss
│   │       └── _variables.scss
│   ├── bower_components
│   ├── components
│   │   ├── Document.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── PageHome.js
│   │   ├── PageNestedDefault.js
│   │   ├── PageNested.js
│   │   ├── PageNestedSub.js
│   │   ├── PageNormal.js
│   │   └── PageNotFound.js
│   ├── constants
│   │   └── .gitkeep
│   ├── dispatcher
│   │   └── AppDispatcher.js
│   ├── services
│   │   └── .gitkeep
│   ├── stores
│   │   └── .gitkeep
│   ├── utils
│   │   └── .gitkeep
│   ├── app.js
│   └── index.html
├── helper
│   ├── bundle.js
│   ├── server.js
│   ├── webpack-config.js
│   └── webpack-stats-helper.js
├── node_modules
├── scripts
│   ├── build-copy.js
│   └── build-html.js
├── test
│   ├── helper
│   │   └── phantomjs-shims.js
│   └── spec
│       └── components
│           └── Document.js
├── .babelrc
├── bower.json
├── .bowerrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── karma.conf.js
├── package.json
├── README.md
├── webpack.build.config.js
├── webpack.config.js
├── webpack.dev.config.js
├── webpack.dev.server.js
├── webpack.preview.config.js
├── webpack.preview.server.js
└── webpack.test.config.js

```

### Tasks
Watch(dev):
```bash
npm run start
```

Test:
```
npm run test
```

Preview
```
npm run preview
```

Build:
```bash
npm run build
```

## License

MIT

## Change log

### 1.1.1
- Update npm packages.
- Fix eslint.

### 1.1.0
- Update `css-loader`.
- Use `postcss-loader` instead of `autoprefixer-loader`.
- Update npm scripts.

### 1.0.6
- Fix `UglifyJsPlugin` config.

### 1.0.5
- Add Babel runtime, polyfill.
- Remove comments when optimize.
- Support banner.
- Use `react-proxy-loader`.

### 1.0.4
- Fix proxy, sever config.
- Rename `lib` to `helper`.

### 1.0.3
- Fix typo.
- Set fail on error when build.

### 1.0.2
- Rename task prebuild to preview.

### 1.0.1
- Port scanner support.

### 1.0.0
- Use `webpack-hot-loader & webpack-dev-server` instead of `gulp & browsersync`.

### 0.3.2
- Update react-proxy-plus-loader to latest version.

### 0.3.1
- Update readme.

### 0.3.0
- Webpack stream.
- Proxy middleware.
- Update webpack build config.
- Fix browser sync watch.
- Update sample app.

### 0.2.1
- Long term caching

### 0.2.0
- Refactor sample app.

### 0.1.5
- ESLint

### 0.1.4
- Update sample app.
- Update README.

### 0.1.3
- Rename 'libraries' to 'bower_components' (standard name).
- Split app and vendor code.
- Separate css bundle.
- Use 'Lodash' instead of 'underscore'.
- Add 'Notify' component.
- Add ['Revalidator'](https://github.com/flatiron/revalidator) mixin to validate form.

### 0.1.2
- Use Webpack watch instead of Gulp watch.
- Update 'CommonsChunkPlugin' config.

### 0.1.1
- Fix typos.
- Remove bower components.

### 0.1.0
- Add 'Document' component.
- Update react, react-router to latest version.
- Add Karma & Jasmine test.
- Fixed some minor bugs.

