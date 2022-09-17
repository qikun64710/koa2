const COS = require('cos-nodejs-sdk-v5')
const { SECRETID, SECRETKEY } = require('../config/config.default')
const BUCKET = 'qkblog-1301961619'
const REGION = 'ap-shanghai'
class UploadFile {
    cos = new COS({
        SecretId: SECRETID,
        SecretKey: SECRETKEY
    })
    putObject(params, callback) {
        console.log('进来了吗')
        return new Promise((resolve, reject) => {
            this.cos.putObject({
                Bucket: BUCKET,
                Region: REGION,
                Key: params.key,
                Body: params.Body
            },function(err, data) {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
}
module.exports = new UploadFile()