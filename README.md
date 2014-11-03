# Ember-git-version

This addon adds a property to your config with current **git** info.

`config.gitInfo` will return the following object:

```json
gitInfo: {
	sha: 'e7dfce8339e7dfce8339',
    abbreviatedSha: 'e7dfce8339',
    branch: 'master'
}
```

## Installing the Addon

Get started by installing the addon using **npm**:

```bash
npm install ember-git-version --save
```

Once installed you now have access to current **git** info through a new config property `config.gitInfo` which is an object with the following values:

```json
gitInfo: {
	sha: 'e7dfce8339e7dfce8339',
    abbreviatedSha: 'e7dfce8339',
    branch: 'master'
}
```

To access the  property, import the config whenever needed.

```js

import config from '../config/environment';

...
	console.log(config.gitInfo.branch);
	console.log(config.gitInfo.abbreviatedSha);
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
