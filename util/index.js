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
module.exports = {
    paging
}