'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the finest ' + chalk.red('ReactFlux') + ' generator!'
    ));

    var prompts = [
      {
        name: 'appName',
        message: 'What is your app\'s name ?',
        default: path.basename(this.destinationRoot())
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.directory('app', 'app');
      this.directory('helper', 'helper');
      this.directory('scripts', 'scripts');
      this.directory('test', 'test');
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        {appName: this.appName}
      );
      this.fs.copy(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {appName: this.appName}
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        {appName: this.appName}
      );
      this.fs.copy(
        this.templatePath('_webpack.build.config.js'),
        this.destinationPath('webpack.build.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.dev.config.js'),
        this.destinationPath('webpack.dev.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.dev.server.js'),
        this.destinationPath('webpack.dev.server.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.preview.config.js'),
        this.destinationPath('webpack.preview.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.preview.server.js'),
        this.destinationPath('webpack.preview.server.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.test.config.js'),
        this.destinationPath('webpack.test.config.js')
      );
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
