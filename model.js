const fs = require('fs');
const db = require('./config/index.js')

let files = fs.readdirSync(__dirname+'/schema');

let js_files = files.filter((f)=>{
    return f.endsWith('.js')
})
module.exports = {};
for(let f of js_files){
    let name = f.substring(0,f.length -3 );
    module.exports[name] = require(__dirname + '/schema/' +f);
}
module.exports.sync = () =>{
    db.sync()
}