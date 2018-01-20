/**
 * Created by jianghe on 2017/12/19.
 */

'use strict';

import $jh from 'lib/spa';
import 'style/project.css';
import projectTemp from 'template/projectTemp';

import $ from 'jquery';
import Swiper from 'lib/swiper/swiper';
import LazyLoad from 'lib/lazyLoad';
import JhScroll from 'lib/jhScroll';
import CommonModel from 'model/commonModel';

// const F2 = require('@antv/f2');

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
                    name: '//img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg'
                },
                {
                    name: '//img.alicdn.com/imgextra/i1/122400877/TB2GQ6eiOqAXuNjy1XdXXaYcVXa_!!0-saturn_solar.jpg_220x220.jpg'
                },
                {
                    name: '//img.alicdn.com/imgextra/i4/16483031/TB2IaURh3fH8KJjy1zcXXcTzpXa_!!0-saturn_solar.jpg_220x220.jpg'
                },
                // {
                //     name: '//img.alicdn.com/imgextra/i2/98536744/TB2q8Dxlf2H8KJjy0FcXXaDlFXa_!!0-saturn_solar.jpg_220x220.jpg'
                // },
                // {
                //     name: '//img.alicdn.com/imgextra/i2/57243257/TB29sA8h0zJ8KJjSspkXXbF7VXa_!!0-saturn_solar.jpg_220x220.jpg'
                // },
                // {
                //     name: '//img.alicdn.com/imgextra/i4/50795768/TB2.NVLlgDD8KJjy0FdXXcjvXXa_!!0-saturn_solar.jpg_220x220.jpg'
                // },
                // {
                //     name: '//img.alicdn.com/imgextra/i3/1287106096881523704/TB2Xergc4AlyKJjSZFyXXbm_XXa_!!0-saturn_solar.jpg_220x220.jpg'
                // },
                // {
                //     name: '//img.alicdn.com/imgextra/i4/15848431/TB2mQbSkTTI8KJjSsphXXcFppXa_!!0-saturn_solar.jpg_220x220.jpg'
                // },
                // {
                //     name: '//img.alicdn.com/imgextra/i1/120701444/TB2nUaHc0rJ8KJjSspaXXXuKpXa_!!0-saturn_solar.jpg_220x220.jpg'
                // }
            ]
        };

        // CommonModel.getProject(function (res) {
        //     console.log(res);
        // });

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

            //使用Swiper组件
            var mySwiper = new Swiper('.project_swiper', {
                autoplay: true,//可选选项，自动滑动
                roundLengths: true,
                autoHeight: true
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