const db = require('./config/index.js')
const js_files = require('./models/index')
module.exports = {};
for(let f in js_files){
    module.exports[f] = require(__dirname + '/models/' +f);
}
module.exports.sync = () =>{
    db.sync({ alert: true })
}