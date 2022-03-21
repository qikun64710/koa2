const db = require('./config/index.js')
const js_files = require('./schema/index')
module.exports = {};
for(let f in js_files){
    module.exports[f] = require(__dirname + '/schema/' +f);
}
module.exports.sync = () =>{
    db.sync()
}