### Testing

#### Configuration on Jenkins

The ```config.json.example``` file is used to configure Jenkins' runtime environment.  It's copied to ```config.json```, so that file needs to be updated as appropriate if new config options are added.  For testing, the important configuration at this time is the location of the virtual serial ports.

#### Running tests

There's two different collections of test suites: ones that run on the server, and ones that run on the GUI/interface layer.  Mocha is used for the server-side tests, Jasmine for the GUI layer.

To run tests in the development environment:

```bash
bbb test
```

To run Mocha tests for xunit output:

```bash
mocha --reporter xunit test/mocha
```