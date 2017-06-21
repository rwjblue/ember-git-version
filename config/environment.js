'use strict';

var gitRepoInfo = require('git-repo-info');

module.exports = function(/* environment, appConfig */) {
  var currentInfo = gitRepoInfo();

  return {
    currentRevision: currentInfo.abbreviatedSha, //=> will be the first 10 chars of the current sha
    longRevision: currentInfo.sha, //=> will be the current sha
    tag: currentInfo.tag, //=> will be the tag for the current sha (or `null` if no tag exists)
    branch: currentInfo.branch, //=> will be the current branch
    committer: currentInfo.committer,      //=> will be the committer for the current sha
    committerDate: currentInfo.committerDate,  //=> will be the commit date for the current sha
    author: currentInfo.author,         //=> will be the author for the current sha
    authorDate: currentInfo.authorDate,     //=> will be the authored date for the current sha
    commitMessage: currentInfo.commitMessage  //=> will be the commit message for the current sha
  };
};
