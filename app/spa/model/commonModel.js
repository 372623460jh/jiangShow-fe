/**
 * Created by Et on 2018/1/10.
 */

import 'whatwg-fetch';
import ProcessData from 'lib/processData';

var CommonConfig = require('../config/commonConfig');

export default {
    getProject: function (fn) {
        fetch(CommonConfig.getProject, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            response.text().then(function (responseText) {
                fn(ProcessData.parseJSON(responseText));
            })
        }).then(function (json) {
            // insertPhotos(json);
        });
    }
}