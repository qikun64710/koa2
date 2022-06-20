const COS = require('cos-nodejs-sdk-v5')

const cosUtil = {
    cos :null,
    Bucket:'qkblog-1301961619',  //存储桶名称
    Region:'ap-shanghai',  //存储桶区域

    // 初始化配置
    init(config){
        if(config){
            this.Bucket = config.Bucket || this.Bucket;
            this.Region = config.Region || this.Region;
            this.Prefix = config.Prefix || this.Prefix;
        }
        // 密钥
        this.cos = new COS({
            SecretId: 'AKIDwhBQO5VeW7RTFl0yh9KEsFK8fvuc2C5h',   // 密钥id
            SecretKey: 'MTJsAF3apnVw5xZu411mGTP5UcT3NQCh'  // 密钥key
        });
    },
    putObject(params,callback){
        return new Promise((resolve,reject)=>{
            this.cos.putObject({
                Bucket:this.Bucket,
                Region:this.Region,
                Key:params.key,
                Body:params.buffer,
                Headers: {
                    'Content-Type': params.fileType, // 限速值设置范围为819200 - 838860800，即100KB/s - 100MB/s，如果超出该范围将返回400错误。
                },
            },function(err,data){
                if(err){
                    reject(err);
                    return;
                }
                resolve(data)
            });
        })
    }
}

module.exports = {
    cosUtil
}
