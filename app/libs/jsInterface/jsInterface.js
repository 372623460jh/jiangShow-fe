/**
 * $jh中与原生Android交互组件
 * Created by jianghe
 */
'use strict';
;(function definejsInterface(global, factory) {
    //初始化$jh
    var jsInterface = {};
    jsInterface = factory(global, jsInterface);
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
        global.jsInterface = jsInterface;
        module.exports = jsInterface; // CommonJS
    } else if (typeof define === 'function' && define.amd) {
        global.jsInterface = jsInterface;
        define(['exports'], jsInterface); // AMD
    } else {
        global.jsInterface = jsInterface;
    }
})(window, function (global, jsInterface, undefined) {

    // 返回回调方法
    var backHandlerCallBack = null;

    jsInterface = {

        // 公共方法
        commonMethod: {
            // 设置返回回调方法的方法
            setBackHandlerCB: function (cb) {
                backHandlerCallBack = cb;
            }
        },

        // android原生提供的接口对象
        interface: {
            // 关闭webview方法
            closeWebview: function () {
                if (window.JsInterface.closeWebview) {
                    window.JsInterface.closeWebview();
                } else {
                    console.log('浏览器端调用closeWebview');
                }
            },
            // 退出应用
            exit: function () {
                if (window.JsInterface.exit) {
                    window.JsInterface.exit();
                } else {
                    console.log('浏览器端调用exit');
                }
            }
        }
    };

    // 挂载在window上供Android原生调用的方法
    window.backHandler = function (params) {
        backHandlerCallBack && backHandlerCallBack(params);
    };

    return jsInterface;

});