'use strict';

var Url = require('url');

var TAG = 'URLBuilder';

function URLBuilder (url, path) {
  this.urlObj = Url.parse(url);
  if (path !== undefined){
    this.urlObj.pathname = path;
  }
};

URLBuilder.prototype.appendPath = function(path){
  if (!this.urlObj.pathname){
    this.urlObj.pathname = '/' + path;
  } else {
    if (!this.urlObj.pathname.endsWith('/')){
      this.urlObj.pathname = this.urlObj.pathname.concat('/');
    }
    this.urlObj.pathname = this.urlObj.pathname.concat(path);
  }
}

URLBuilder.prototype.appendQuery = function(key, value){
  if (!this.urlObj.query){
    this.urlObj.query = {};
  }
  if (key in this.urlObj.query){
    this.urlObj.query[key].push(value);
  } else {
    this.urlObj.query[key] = [value];
  }
}

URLBuilder.prototype.build = function(){
  return Url.format(this.urlObj);
}

module.exports = URLBuilder;