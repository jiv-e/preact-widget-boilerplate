# Preact widget boilerplate
Boilerplate for embeddable web page widgets. No server side
rendering or routing included.

Code and folder structure are based on ejected create-react-app so you can
utilize it's great documentation directly.

Learn more: [Create React App guide](
https://github.com/facebookincubator/create-react-app/blob/05f3f5ee81aec9429f00f57d17b499d8a22aadef/packages/react-scripts/template/README.md)

## Additional features
 - Redux for state management
 - Jest and Enzyme for testing
 - Preact for production builds

## Notes
React is replaced by adding resolve aliases to Webpack configuration. React is
still used when tests are run because Jest doesn't use Webpack. This is a little
bit dangerous. If preact-compat has some issues replicating React's features
tests may become unreliable. Until some problems are noticed I will keep it this
way.

## Preact filesize comparison
The comparison is based on clean ejected creater-react-app.
### Before preact
File size after gzip:

  - 46.68 KB  build/static/js/main.4a82b556.js

### After preact and preact-compat
File size after gzip:

  - 12.25 KB  build/static/js/main.1870a513.js

## Usage
###Install Node.js
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

MIT