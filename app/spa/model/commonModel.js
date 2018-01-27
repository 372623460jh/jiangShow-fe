/**
 * Created by Et on 2018/1/10.
 */

import 'whatwg-fetch';
import ProcessData from 'lib/processData/processData';
import layer from 'lib/layer/layer';
var CommonConfig = require('../config/commonConfig');


export default {

    /**
     * 获取项目详情接口
     * @param value
     * @param fn
     */
    getProject: function (value, fn) {
        fetch(CommonConfig.getProject + value.userId, CommonConfig.getDefaultConfig).then(function (response) {
            response.text().then(function (responseText) {
                fn(ProcessData.parseJSON(responseText));
            })
        });
    },

    /**
     * 获取主页信息接口
     * @param value
     * @param fn
     */
    getMainInfo: function (value, fn) {
        fetch(CommonConfig.getMainInfo + value.userId, CommonConfig.getDefaultConfig).then(function (response) {
            response.text().then(function (responseText) {
                fn(ProcessData.parseJSON(responseText));
            })
        });
    }
}