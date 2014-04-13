'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var drupal = require('../util/drupal');

var DrupalGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.on('end', function () {
      if (!this.options['skip-install']) {
        drupal.getDrupal(this.drupalVersion);
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.log(this.yeoman);
    this.log(chalk.magenta('You\'re using the Drupal generator'));

    var prompts = [{
      type: 'list',
      name: 'drupalVersion',
      message: 'Would you like to enable this option?',
      choices: ['6', '7', '8'],
      default: '7'
    }];

    this.prompt(prompts, function (props) {
      this.drupalVersion = props.drupalVersion;

      done();
    }.bind(this));
  }
});

module.exports = DrupalGenerator;
