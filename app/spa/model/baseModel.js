/**
 * Created by Et on 2017/12/24.
 */

'use strict';
import $jh from 'lib/spa/spa';
import $ from 'jquery';

export default {
    /**
     * 返回平台类别
     * @return {string}
     */
    getPlatform: function () {
        return /(MicroMessenger)/i.test(navigator.userAgent) ? "Wechat" : /(iPhone|iPad|iPod|iOS)/i.test(
            navigator.userAgent) ? "iOS" : /(Android)/i.test(navigator.userAgent) ? "Android" : "Web";
    },

    /**
     * 导航栏初始方法
     * @param obj
     */
    initNav: function (obj) {
        var $nav_bar = $(".nav_tab .nav_bar");
        $nav_bar.addClass("_outline");
        $(".nav_tab .nav_bar[data-key='" + obj.initPageName + "']").removeClass("_outline");
        var key = (obj && obj.initPageName) || '',
            switchHandle = true;
        $nav_bar.on('click', function (e) {
            if (switchHandle) {
                switchHandle = false;
                setTimeout(function () {
                    switchHandle = true;
                }, 300);
                if (key != $(this)[0].dataset.key) {
                    key = $(this)[0].dataset.key;
                    $(".nav_tab .nav_bar").addClass("_outline");
                    $(this).removeClass("_outline");
                    switch (key) {
                        case 'intro':
                            $jh.switchPage({
                                routeName: '/intro',
                            });
                            break;
                        case 'project':
                            clearInterval(window.timer);
                            $jh.switchPage({
                                routeName: '/project',
                            });
                            break;
                        case 'skills':
                            clearInterval(window.timer);
                            $jh.switchPage({
                                routeName: '/skills',
                            });
                            break;
                    }
                }
            }
        });
    },

    /**
     * 节流方法1
     * @param method 回调方法
     * @param delay 间隔＞delay 才会执行method
     * @returns {Function}
     */
    throttleOne: function (method, delay) {
        var timer = null;
        return function () {
            var context = this,
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    },

    /**
     * 节流方法2
     * @param method 回调方法
     * @param delay 间隔delay内method只会被执行1次
     * @returns {Function}
     */
    throttleTwo: function (method, delay) {
        method.beginTime = new Date().getTime();
        return function () {
            var context = this,
                args = arguments,
                nowTime = new Date().getTime();
            if (nowTime - method.beginTime > delay) {
                method.beginTime = nowTime;
                method.apply(context, args);
            }
        }
    },

    /**
     * 事件委托时用来获取点击父盒子的自定义属性
     * @param clickObj 点击dom对象
     * @param targetObj 父盒子dom对象
     * @param dataSet 需要检索的自定义属性名
     * @returns {*}
     */
    getParentDataSet: function (clickObj, targetObj, dataSet) {
        var obj = clickObj;
        while (obj != targetObj) {
            var ds = obj.dataset[dataSet];
            if (ds != undefined) {
                return ds;
            } else {
                //寻找父元素兼容ie写法
                obj = obj.parentNode ? obj.parentNode : obj.parentElement;
            }
        }
    }
}