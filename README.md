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
