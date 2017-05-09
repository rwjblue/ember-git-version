'use strict';

var gitRepoInfo = require('git-repo-info');

module.exports = function(/* environment, appConfig */) {
  var currentInfo = gitRepoInfo();

  return Object.assign({}, currentInfo, {
    currentRevision: currentInfo.abbreviatedSha,
    longRevision: currentInfo.sha,
  });
};
