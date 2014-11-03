'use strict';

var gitRepoInfo = require('git-repo-info');

module.exports = function(/* environment, appConfig */) {
  
  return {
    gitInfo: gitRepoInfo()
  };

};
