# Preact widget boilerplate (PWB)
Do you want to create a modern Javascript thingy for a static or CMS based
website?

Great! PWB is a lightweight opinionated boilerplate for making them.

PWB offers modern tooling for building your widget. The result is a folder
with compressed Javascript and CSS files, which also includes assets like
images in one subfolder. You just need to include the JS and CSS references in
your HTML and specify the ID of the element you want to have replaced by the
rendered widget.

The idea is that you can insert multiple different widgets on the same page.
PWB is not meant for single page applications, but there's nothing stopping you
from using it for that also. 

## Features
 - Based on [Create React App](https://github.com/facebookincubator/create-react-app).
 - React is replaced with [Preact](https://preactjs.com/) (except for tests).
 - State is managed [Redux](http://redux.js.org/).
 - Uses [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for testing.
 - Offers opinionated folder structure
 - Includes helpful example code for learning purposes and getting you started.

### Create React App
Create React App is a tool created by Facebook for easy starting point for React
development. PWB is based on "ejected" Create React App. [Create
React App documentation](https://github.com/facebookincubator/create-react-app/blob/05f3f5ee81aec9429f00f57d17b499d8a22aadef/packages/react-scripts/template/README.md)
offers a lot of good information about the setup.

### Preact
Preact is a lighter version of React. With
[preact-compat](https://github.com/developit/preact-compat) library it works
as a drop in replacement for React. It has essentially the same features but
dramatically reduced build size.

React is replaced [by adding resolve aliases to Webpack configuration](https://github.com/developit/preact-compat#usage-with-webpack).
It's easy to switch back using React if you need to.

#### Preact filesize comparison
The comparison is based on clean ejected creater-react-app.

**Before preact**

File size after gzip:

  - 46.68 KB  build/static/js/main.4a82b556.js

**After preact and preact-compat**

File size after gzip:

  - 12.25 KB  build/static/js/main.1870a513.js

### Redux
Redux is a state management library, which has become really popular. It's chosen
for PWB because it directs you to structure your code in a certain way. If your
application grows this should result in more organized and testable codebase.

If this feels too clunky or restricting you can always change it. Maybe you could
try MobX? For small widgets you can very well only need one or two components.
In this case you could be fine with React's setState method.

PWB also supports [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

### Testing
See: [Create React App documentation about testing](https://github.com/facebookincubator/create-react-app/blob/05f3f5ee81aec9429f00f57d17b499d8a22aadef/packages/react-scripts/template/README.md#running-tests)

Use this documentation for assertions: https://facebook.github.io/jest/docs/expect.html#content

#### Notes about testing and preact-compat
React is still used when tests are run because Jest doesn't use Webpack. This is a little
bit dangerous. If preact-compat has some issues replicating React's features
tests may become unreliable. Until some problems are noticed it's kept this
way.


### Folder structure
```
src/
  app
    App.css
    App.js
    App.test.js
    Header.js
    Header.test.js
    index.js
    Intro.js
    Intro.test.js
  assets
    logo.svg
  components
    _common
      Button.js
    counter
      Counter.css
      Counter.js
      Counter.test.js
      CounterActions.js
      CounterActions.test.js
      CounterReducer.js
      CounterReducer.test.js
      CounterValueDisplay.js
      index.js
    toggle
      index.js
      Toggle.css
      Toggle.js
      ToggleActions.js
      ToggleActions.test.js
      ToggleReducer.js
      ToggleReducer.test.js
  GlobalActions.js
  GlobalActions.test.js
  index.css
  index.js
  reducers.js

```

PWB suggests bundling related files together around components.
It means that Redux actions, reducers and
[container components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
are in the same folder with the actual presentational component. This goes
against Redux's creator Dan Abrimov's ideas about decoupling state management
more loosely. If you don't like it you can make a fork or create an issue to
start conversation about the best way to do this.

Some special things to note:

- App component has it's own folder.
- Container components are defined in components index.js file.
- Shared generic components are in components/_common.
- Sub components are inside the parent component's folder.
- Reducers are collected together in src/reducers.js.
- If you need to dispatch one component's actions from another component you. 
could try to follow [this rule](https://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-2-create-strict-module-boundaries).
- In some cases you can consider using global actions. For this see
src/GlobalActions.js, src/app/index.js, CounterReducer.js and ToggleReducer.js.

Read articles below if you want to understand some of the reasoning behind this
structure.

- https://marmelab.com/blog/2015/12/17/react-directory-structure.html
- https://jaysoo.ca/2016/02/28/organizing-redux-application
- https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/
- https://jaysoo.ca/2016/12/12/additional-guidelines-for-project-structure/

## Usage
### Install Node.js
Tested and recommended Node.js version is written in [.nvmrc](.nvmrc) file.
There's many ways to install Node.js on your system. Here's some tips.

#### Mac OS and Linux
Use [NVM](https://github.com/creationix/nvm). You can find NVM install instructions [here](https://github.com/creationix/nvm#installation). After installing run the following command in the project root to use the right version of Node.js.
```
$ nvm use
```

#### Windows
For Windows it's recommended to install .msi package from nodejs.org. Seems to
work ok, but running tests can cause some errors.

### Create project
Git clone this repository to your own computer. Cd to the project folder.

### Install dependencies
Install project dependencies using Yarn.
```
$ npm install yarn -g
$ yarn
```

### Development server
You can start the development server with the start script.
```
$ yarn start
```
This should open a browser with the rendered app. You can now edit JS and CSS
files and see the changes happening live in your browser.

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