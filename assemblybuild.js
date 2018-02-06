

const Assembly = require('@mapbox/assembly');


const myOptions = [
];

Assembly.buildUserAssets('/Users/Jonny/Documents/GitHub/metastream-app/dist/assets/assembly_custom', myOptions)
  .then(() => console.log("Done building assembly, great job!") /* something */)
  .catch((err) => console.log("nope") /* handle error */);
