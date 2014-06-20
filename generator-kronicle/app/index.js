'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var KronicleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Kronicle generator.'));

    var prompts = [
        {
          name: 'projectName',
          message: 'What is your kronicle project name?'
        },
        {
          name: 'projectDescription',
          message: 'Add a description of your project'
        },
        {
          type: 'confirm',
          name: 'coffeeIncluded',
          message: 'Would you like to use coffee script with this project?'
        }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.projectDescription = props.projectDescription;
      this.coffeeIncluded = props.coffeeIncluded;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('css');
    this.mkdir('img');
    this.mkdir('js');
    this.mkdir('js/app');
    this.mkdir('js/app/DataSources');
    this.mkdir('js/app/Views');
      
    this.copy('main.js', 'js/app/main.js');
    this.copy('ArrayDataSource.js', 'js/app/DataSources/ArrayDataSource.js');
      
    if(this.coffeeIncluded) {
      this.mkdir('coffee');
      this.mkdir('coffee/app');
      this.mkdir('coffee/app/DataSources');
      this.mkdir('coffee/app/Views');
      this.copy('main.coffee', 'coffee/app/main.coffee');
      this.copy('ArrayDataSource.coffee', 'coffee/app/DataSources/ArrayDataSource.coffee');
    }
    
    this.mkdir('posts');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.template('_kron.json', 'kron.json');
    this.copy('Gruntfile.coffee', 'Gruntfile.coffee');
    this.copy('index.html', 'index.html');
    this.copy('README.md', 'README.md');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = KronicleGenerator;