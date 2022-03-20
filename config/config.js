const defaultConfig = './config-default.js';
const overrideConfig = './config-override.js';
const testConft = './config-test.js';

const fs = require('fs');

var config = null;

if(process.env.NODE_ENV === 'test'){
    console.log(`load${testConft}`);
    config = require(testConft);
}else{
    console.log(`load${defaultConfig}`);
    config = require(defaultConfig);
    try{
        if(fs.statSync(overrideConfig).isFile()){
            console.log(`laod${overrideConfig}`);
            config = Object.assign(config,require(overrideConfig));
        }
    }catch(err){
        console.log(`Cannot load111${overrideConfig}`);
    }
}
module.exports = config;
