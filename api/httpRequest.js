const baseUrl='http://192.168.1.192:9001/push/v2.0/';

const sendRequest=(url,method,params)=>{
    wx.showLoading({
        title: '请求中，请耐心等待..'
    });
    let promise =  new Promise((resolve,reject)=>{
        wx.request({
            url: `${baseUrl}/${url}`,
            method: method,
            data: params,
            header: {
                'Content-Type': 'application/json',
                'session_id': 'A446ABC1F599104EA10EAF410F69C31F',
                'uniacid': 11
            },
            complete: (res) => {
                wx.hideLoading();
                if (res.statusCode === 502) {
                    console.log('服务正在维护中')
                } else if(res.statusCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            },
            fail:err=>{
                reject(err)
            }
        })
    })
    return promise
}

module.exports = {
    sendRequest: sendRequest
}