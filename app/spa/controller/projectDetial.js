/**
 * Created by Et on 2018/1/28.
 */
/**
 * Created by jianghe on 2017/12/19.
 */

'use strict';

import $jh from 'lib/spa/spa';
import 'style/projectDetial.css';
import projectDetialTemp from 'template/projectDetialTemp';
import $ from 'jquery';
import iScroll from 'lib/iScroll/iscroll-probe';
import Swiper from 'lib/swiper/js/swiper3';
import layer from 'lib/layer/layer';
import Vu from 'lib/Vu/vu';

class projectDetialcontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
        this.data = {};
    }

    onCreate(nowPage, lastPage) {
        var that = this;
        setTimeout(function () {
            // 关闭loading
            $jh.loading.close();
        }, 200);
        this.data = nowPage.args.detial;
        that.render(nowPage, lastPage);
    }

    render(nowPage, lastPage) {
        var that = this;
        that.data.hasImg = that.data.imgList ? true : false;

        that.vu = new Vu({
            template: projectDetialTemp.html,
            data: that.data
        });

        that.rootDom = that.vu.$el;

        nowPage.dom.appendChild(that.rootDom);

        $(that.rootDom).ready(function () {

            var android = $(that.rootDom).find('.android'),
                ios = $(that.rootDom).find('.ios');

            android.on('click', function (e) {
                layer.open({
                    title: 'android下载地址',
                    content: that.data.androidUrl,
                    btn: ['确定', '复制'],
                    yes: function (index) {
                        layer.close(index);
                    },
                    no: function (index) {
                        layer.close(index);
                        layer.open({
                            content: '已经复制',
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });
                    }
                });
            });

            ios && ios.on('click', function (e) {
                layer.open({
                    title: 'ios下载地址',
                    content: that.data.iosUrl,
                    btn: ['确定', '复制'],
                    yes: function (index) {
                        layer.close(index);
                    },
                    no: function (index) {
                        layer.close(index);
                        layer.open({
                            content: '已经复制',
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });
                    }
                });
            });

            setTimeout(function () {
                new iScroll('.detialScroll', {
                    click: true,//false阻止事件冒泡
                    disablePointer: true, //禁用指针
                    disableTouch: false, //禁用触摸
                    disableMouse: false, //禁用鼠标
                    deceleration: 0.003 //滚动势能
                });
            }, 100);

            new Swiper('.swiper-container', {
                freeMode: true,
                width: 4 * $jh.prop.rem,
            });

            $(that.rootDom).find(".return").on("click", function () {
                $jh.backHandle();
            });
        });
    }

    onResume(nowPage, lastPage) {
        setTimeout(function () {
            // 关闭loading
            $jh.loading.close();
        }, 200);
    };

    onBack() {
        $jh.goBack({
            animation: 'easeOut'
        })
    }
}

$jh.addController('/projectDetial', projectDetialcontroller);