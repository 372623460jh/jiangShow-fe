/**
 * Created by jianghe on 2017/12/19.
 */

'use strict';

import $jh from 'lib/spa/spa';
import 'style/project.css';
import projectTemp from 'template/projectTemp';

import $ from 'jquery';
import Swiper from 'lib/swiper/js/swiper3';
import 'lib/swiper/css/swiper.css';
import LazyLoad from 'lib/lazyLoad';
import JhScroll from 'lib/jhScroll';
import CommonModel from 'model/commonModel';

class Bcontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
        this.data = {};
    }

    onCreate(nowPage, lastPage) {
        var that = this;
        that.data = {
            'imgList': [
                {
                    projectName: '撒旦法撒大声地',
                    bg: '黄金客户接口和进黄金客户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可口黄金客户即可黄金客户接口和进口黄金客户即可',
                    detial: '黄金客黄金客户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可户接口和进口黄金客户即可黄金客户接口和进口黄金客户即可黄金客户接口和户即可',
                    skills: [
                        {
                            skill: 'java'
                        }, {
                            skill: 'js'
                        }, {
                            skill: 'react'
                        }
                    ],
                    time: '2017205-20465154'
                },
                {
                    projectName: '1123123',
                    bg: '12322222222dasdasda111111111111111',
                    detial: 'dssssssssssssssssgvsdfffffffffsd',
                    skills: [
                        {
                            skill: 'java'
                        }, {
                            skill: 'js'
                        }, {
                            skill: 'react'
                        }
                    ],
                    time: '2017205-20465154'
                },
                {
                    projectName: '1123123',
                    bg: '12322222222dasdasda111111111111111',
                    detial: 'dssssssssssssssssgvsdfffffffffsd',
                    skills: [
                        {
                            skill: 'java'
                        }, {
                            skill: 'js'
                        }, {
                            skill: 'react'
                        }
                    ],
                    time: '2017205-20465154'
                },
                {
                    projectName: '1123123',
                    bg: '12322222222dasdasda111111111111111',
                    detial: 'dssssssssssssssssgvsdfffffffffsd',
                    skills: [
                        {
                            skill: 'java'
                        }, {
                            skill: 'js'
                        }, {
                            skill: 'react'
                        }
                    ],
                    time: '2017205-20465154'
                },
            ]
        };

        that.rootDom = $jh.parseDom(projectTemp.html, that.data)[0];
        nowPage.dom.appendChild(this.rootDom);
        $(document).ready(function () {

            var $projectScroll = $(that.rootDom).find('.project_scroll'),
                $downCell = $(that.rootDom).find('.down_cell'),
                $scrollWrapper = $(that.rootDom).find('.scroll_wrapper'),
                $upCell = $(that.rootDom).find('.up_cell'),
                $refreshImg = $(that.rootDom).find('.down_cell img'),
                $refreshSpan = $(that.rootDom).find('.up_cell span'),
                $loaderInner = $(that.rootDom).find('.down_cell .loader-inner');

            //使用JhScroll组件
            var myScroll = new JhScroll('.project_scroll', {
                click: true,//false阻止事件冒泡
                disablePointer: true, //禁用指针
                disableTouch: false, //禁用触摸
                disableMouse: false, //禁用鼠标
                deceleration: 0.005, //滚动势能
                probeType: 3,//触发模式1滚动条不繁忙的时候触发 2除了在势能和反弹范围触发 3像素级的触发scroll事件
                DownUpLoad: {
                    downwardHeight: 1.8 * $jh.prop.rem,
                    upwardHeight: 1 * $jh.prop.rem,
                    $Scroll: $projectScroll,
                    $scrollWrapper: $scrollWrapper,
                    $downCell: $downCell,
                    $upCell: $upCell,
                    downMove: function (obj) {
                        var rih = obj.height * 0.6,
                            riw = obj.height * 0.6 * 2.92;
                        $refreshImg.css({
                            transition: 'none',
                            opacity: 1,
                            width: riw,
                            height: rih
                        });
                        $loaderInner.css({
                            transition: 'none',
                            opacity: 0,
                        });
                        $downCell.css({
                            lineHeight: obj.height + 'px'
                        });
                    },
                    upMove: function (obj) {
                        $refreshSpan.css({
                            height: obj.height,
                            fontSize: obj.height * 0.34 + 'px'
                        });
                        $upCell.css({
                            lineHeight: obj.height * 0.85 + 'px'
                        });
                    },
                    downEnd: function () {
                        setTimeout(function () {
                            $refreshImg.css({
                                opacity: 0,
                                transition: 'opacity 0.5s linear'
                            });
                            $loaderInner.css({
                                opacity: 1,
                                transition: 'opacity 0.5s linear'
                            });
                        }, 500);
                    },
                    upEnd: function () {
                    }
                }
            });

            var mySwiper = new Swiper('.project_swiper', {
                autoplay: 5000,//可选选项，自动滑动
                effect: 'coverflow',
                loop: true,
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false,//操作后继续执行autoplay
                lazyLoading: true//懒加载
            });

            //使用图片懒加载组件
            new LazyLoad({
                offset: 200,
                time: 300,
                iScroll: myScroll.iScroll
            });

            $projectScroll.on("click", function () {
                myScroll.closeRefresh();
            });
        });
    }

    onBack() {
        console.log('关闭webview');
    }
}

$jh.addController('/project', Bcontroller);