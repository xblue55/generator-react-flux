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
│   │       ├── app.scss
│   │       ├── footer.scss
│   │       └── header.scss
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
├── node_modules
├── test
│   ├── helper
│   │   └── phantomjs-shims.js
│   └── spec
│       └── components
│           └── Document.js
├── bower.json
├── .bowerrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── gulpfile.js
├── karma.conf.js
├── package.json
├── README.md
├── webpack.config.js
└── webpack.test.config.js

```

### Gulp tasks
Watch(dev):
```bash
gulp serve
```

Test:
```
gulp test
```

Build:
```bash
gulp build
```

## License

MIT
