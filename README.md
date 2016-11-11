# Ember-git-version

This addon helps you quickly get the current **git** revision hash is **Short SHA** form.

`i.e. e7dfce8339`

## Installing the Addon

Get started by installing the addon using **npm**:

```bash
npm install ember-git-version --save
```

Once installed you now have access to the current **git revision** through a new config property `config.currentRevision`.

To access the new property, import the config whenever needed.

```js

import config from '../config/environment';

...
	console.log(config.currentRevision);
  console.log(config.currentRevision); //=> will be the first 10 chars of the current sha
  console.log(config.longRevision); //=> will be the current sha
  console.log(config.tag); //=> will be the tag for the current sha (or `null` if no tag exists)
  console.log(config.branch); //=> will be the current branch
  console.log(config.committer);      //=> will be the committer for the current sha
  console.log(config.committerDate);  //=> will be the commit date for the current sha
  console.log(config.author);         //=> will be the author for the current sha
  console.log(config.authorDate);     //=> will be the authored date for the current sha
  console.log(config.commitMessage); //=> will be the commit message for the current sha
...

```

*Note: The config import statement is a relative path.*

**Now you can make sure any issues are tracked against the correct git revision!**

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
