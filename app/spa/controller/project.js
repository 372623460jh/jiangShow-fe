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
import LazyLoad from 'lib/lazyLoad/lazyLoad';
import JhScroll from 'lib/jhScroll/jhScroll';
import CommonModel from 'model/commonModel';
import BaseModel from 'model/baseModel';
import baseModel from 'model/baseModel';

class Bcontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
        this.data = {};
    }

    onCreate(nowPage, lastPage) {
        var that = this;
        // 请求数据
        CommonModel.getProject(
            {userId: $jh.prop.userId},
            function (res) {
                if (res.REV) {
                    that.data = res.DATA;
                    $jh.setStorage('getProject', res.DATA);
                    that.render(nowPage, lastPage);
                } else {
                    layer.open({
                        content: `${res.MSG}`,
                        btn: '我知道了',
                        yes: function (index) {
                            layer.close(index);
                        }
                    });
                }
            }
        );
    }

    render(nowPage, lastPage) {
        var that = this;
        that.rootDom = $jh.parseDom(projectTemp.html, that.data)[0];
        nowPage.dom.innerHTML = null;
        nowPage.dom.appendChild(this.rootDom);
        $(document).ready(function () {

            var $projectScroll = $(that.rootDom).find('.project_scroll'),
                $downCell = $(that.rootDom).find('.down_cell'),
                $scrollWrapper = $(that.rootDom).find('.scroll_wrapper'),
                $upCell = $(that.rootDom).find('.up_cell'),
                $refreshImg = $(that.rootDom).find('.down_cell img'),
                $refreshSpan = $(that.rootDom).find('.up_cell span'),
                $loaderInner = $(that.rootDom).find('.down_cell .loader-inner');

            var $ul = $(that.rootDom).find('.scroll_wrapper ul');

            $ul.on('click', function (e) {
                var index = BaseModel.getParentDataSet(e.target, $ul.get(0), 'index');
                if (index != undefined) {
                    $jh.go({
                        routeName: '/projectDetial',
                        args: {
                            detial: that.data.project[index]
                        },
                        animation: 'easeIn'
                    });
                }
            });

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
                        // 下拉刷新数据
                        CommonModel.getProject(
                            {userId: $jh.prop.userId},
                            function (res) {
                                if (res.REV) {
                                    that.data = res.DATA;
                                    $jh.setStorage('getProject', res.DATA);
                                    setTimeout(function () {
                                        myScroll.closeRefresh();
                                        that.render(nowPage, lastPage);
                                    }, 500);
                                } else {
                                    layer.open({
                                        content: `${res.MSG}`,
                                        btn: '我知道了',
                                        yes: function (index) {
                                            layer.close(index);
                                        }
                                    });
                                }
                            }
                        );
                        $refreshImg.css({
                            opacity: 0,
                            transition: 'opacity 0.2s linear'
                        });
                        $loaderInner.css({
                            opacity: 1,
                            transition: 'opacity 0.2s linear'
                        });
                    },
                    upEnd: function () {
                        setTimeout(function () {
                            myScroll.closeRefresh();
                        }, 500);
                    }
                }
            });

            var mySwiper = new Swiper('.project_swiper', {
                // autoplay: 5000,//可选选项，自动滑动
                effect: 'coverflow',
                loop: true,
                pagination: '.swiper-pagination',
                // autoplayDisableOnInteraction: false,//操作后继续执行autoplay
                lazyLoading: true//懒加载
            });

            //使用图片懒加载组件
            new LazyLoad({
                offset: 200,
                time: 500,
                iScroll: myScroll.iScroll
            });
        });
    }

    onBack() {
        baseModel.exitSystem();
    }
}

$jh.addController('/project', Bcontroller);