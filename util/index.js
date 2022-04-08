const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
/**
 * 
 * @param {count,rows} item   分页查询的sql语句 执行后的结果
 */
function paging(item,pageSize,current_page){
    let obj = {};
    obj.data = item.rows;
    obj.lastPage = Math.ceil(item.count / pageSize); //最后一页
    obj.current_page = current_page;//当前页
    return obj
}
/**
 * 计算小文件的md5值
 */
function smallFileMd5(filepath){
    const stream = fs.readFileSync(filepath);
    var fsHash = crypto.createHash('md5');
    fsHash.update(stream,'utf-8');
    let md5 = fsHash.digest('hex');
    return md5;
}
module.exports = {
    paging,
    smallFileMd5
}