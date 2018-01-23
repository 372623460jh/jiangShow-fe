/**
 * Created by Et on 2018/1/10.
 */

import 'whatwg-fetch';
import ProcessData from 'lib/processData/processData';
import layer from 'lib/layer/layer';
var CommonConfig = require('../config/commonConfig');


export default {
    getProject: function (value, fn) {
        fetch(CommonConfig.getProject, CommonConfig.getDefaultConfig).then(function (response) {
            response.text().then(function (responseText) {
                fn(ProcessData.parseJSON(responseText));
            })
        }).then(function (json) {
            // console.log(json);
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