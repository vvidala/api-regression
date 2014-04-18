api-regression
==============

Regressing Testing for ForRent.Com API

####Basic Usage
```
mocha
```

#####Using NPM
```
npm install
npm test
```

#####Using Make
```
make test
```

#####To specify the baseurl of the test environment:

######In CLI Mode:
```
env BASEURL=http://localhost:4000 npm test
```

######In Jenkins CI:
Set environment variable `BASEURL` under `Manage Jenkins > Configure System > Global properties > Environment Variables`