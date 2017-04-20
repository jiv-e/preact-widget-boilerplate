# Preact widget boilerplate
Boilerplate for embeddable web page widgets. No server side
rendering or routing included.

Code and folder structure are based on ejected create-react-app so you can
utilize it's great documentation directly.

Learn more: [Create React App guide](
https://github.com/facebookincubator/create-react-app/blob/05f3f5ee81aec9429f00f57d17b499d8a22aadef/packages/react-scripts/template/README.md)

## Features
 - Redux for state management
 - Jest and Enzyme for testing
 - Opinionated folder structure

### Notes about testing and preact-compat
React is replaced by adding resolve aliases to Webpack configuration. React is
still used when tests are run because Jest doesn't use Webpack. This is a little
bit dangerous. If preact-compat has some issues replicating React's features
tests may become unreliable. Until some problems are noticed I will keep it this
way.

### Folder structure
```
src/
  app
    App.css
    App.js
    App.test.js
    Header.js
    Intro.js
  assets
    logo.svg
  components
    _common
      Button.js
    counter
      Counter.css
      Counter.js
      CounterActions.js
      CounterReducer.js
      CounterValueDisplay.js
      index.js
    toggle
      index.js
      Toggle.css
      Toggle.js
      ToggleActions.js
      ToggleReducer.js
  index.css
  index.js
  reducers.js
```

This boilerplate suggests bundling component related files together. This means
that Redux actions, reducers and
[container components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
are in the same folder with the contained component. This goes against Redux's
creator Dan Abrimov's ideas about decoupling state management more loosely.
If you don't like it you can change it.

Some special things to note:

- App component has it's own folder
- Container components are defined in components index.js file
- Shared generic components are in components/_common
- Sub components are inside the parent component's folder
- Reducers are collected together in src/reducers.js
- If you need to dispatch other components actions try to follow
[this rule](https://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-2-create-strict-module-boundaries)

Read these articles if you want to understand the reasoning behind this folder
structure.

- https://marmelab.com/blog/2015/12/17/react-directory-structure.html
- https://jaysoo.ca/2016/02/28/organizing-redux-application
- https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/
- https://jaysoo.ca/2016/12/12/additional-guidelines-for-project-structure/

## Preact filesize comparison
The comparison is based on clean ejected creater-react-app.
### Before preact
File size after gzip:

  - 46.68 KB  build/static/js/main.4a82b556.js

### After preact and preact-compat
File size after gzip:

  - 12.25 KB  build/static/js/main.1870a513.js

## Usage
### Install Node.js
Recommended Node.js version is written in .nvmrc file. The right version of
Node.js can be installed in many ways on your system.
[NVM](https://github.com/creationix/nvm) is recommended.

Find NVM install instructions [here](https://github.com/creationix/nvm#installation).
Run the following command in the project root to use the right version of Node.js.
```
$ nvm use
```

### Create project

Git clone this repository to your own computer. Cd to the project folder.

### Install dependencies

Install the project dependencies using Yarn.

```
$ npm install yarn -g
$ yarn
```

### Development server

You can start the development server with the start script.
```
$ yarn start
```
### Production build

You can compile the production build with the build script.

```
$ yarn run build
```

### Test

You can run tests with the test script.
```
yarn run test
```

## License

[MIT](LICENSE)