

const Assembly = require('@mapbox/assembly');

const myOptions = [

];

Assembly.buildUserAssets('/Users/Jonny/Documents/-irisProcess/Builds/Assembly/Source Build', myOptions)
  .then(() => console.log() /* something */)
  .catch((err) => console.log(nope) /* handle error */);
