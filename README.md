# Preact widget boilerplate
This boilerplate is made for embeddable web page widgets. No server side
rendering or routing included.

It's based on ejected create-react-app, with react and react-dom replaced with
preact-compat for reduced filesize.

It includes Redux for state management and uses Jest for testing. More
information about testing and other things related to create-react-app can be
found here:
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md

## Filesize comparison
This comparison is based on clean ejected creater-react-app.
### Before preact
File sizes after gzip:

  - 46.68 KB (+34.42 KB)  build/static/js/main.4a82b556.js

### After preact and preact-compat
File sizes after gzip:

  - 12.25 KB  build/static/js/main.1870a513.js

