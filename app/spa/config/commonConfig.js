/**
 * Created by Et on 2018/1/10.
 */

const domain = 'http://mob.ijianghe.cn/mobapi';

module.exports = {
    // fetch get请求的默认配置
    getDefaultConfig: {
        method: 'GET',
        // credentials有三个值可以配置，
        // 默认是:'omit'， 即忽略cookie
        // 'same-origin'： 同域名下请求会发送cookie。
        // 'include'：是否同域名都会发送cookie。
        credentials: "same-origin",
        headers: {
            "Accept": "application/json,text/plain,*/*",
            "Content-Type": "application/json;charset=utf-8"
        }
    },
    // fetch POST请求的默认配置
    PostDefaultConfig: {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            "Accept": "application/json,text/plain,*/*",
            "Content-Type": "application/json;charset=utf-8"
        }
    },
    // 获取项目接口
    getProject: domain + '/getProject/',
    // 获取技能
    getSkills: domain + '/getSkills/',
    // 获取主页信息接口
    getMainInfo: domain + '/getMainInfo/'
}