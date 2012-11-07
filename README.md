### Running tests

There's two different collections of test suites: ones that run on the server, and ones that run on the GUI/interface layer.  Mocha is used for the server-side tests, Jasmine for the GUI layer.

To run tests in the development environment:

```bash
bbb test
```

To run Mocha tests for xunit output:

```bash
mocha --reporter xunit test/mocha
```