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
│   │   └── TodoActionCreators.js
│   ├── app.js
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── styles
│   │       └── app.scss
│   ├── components
│   │   ├── Header.js
│   │   ├── PageHome.js
│   │   ├── PageNested.js
│   │   ├── PageNormal.js
│   │   ├── PageNotFound.js
│   │   ├── SubPageDefault.js
│   │   ├── SubPage.js
│   │   ├── TodoItem.js
│   │   └── Todo.js
│   ├── constants
│   │   └── TodoConstant.js
│   ├── dispatcher
│   │   └── TodoDispatcher.js
│   ├── index.html
│   ├── libraries
│   └── stores
│       └── TodoStore.js
├── bower.json
├── gulpfile.js
├── node_modules
├── package.json
├── README.md
└── webpack.config.js
```

### Gulp tasks
Watch & rebuild(dev):
```bash
gulp serve
```

Build:
```bash
gulp build
```

## License

MIT
