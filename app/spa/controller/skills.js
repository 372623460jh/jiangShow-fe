/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa/spa';
import 'style/skills.css';
import $ from 'jquery';
import skillsTemp from 'template/skillsTemp';
import 'lib/swiper/css/swiper.css';
import Swiper from 'lib/swiper/js/swiper3';
import JhScroll from 'lib/jhScroll/jhScroll';
import LazyLoad from 'lib/lazyLoad/lazyLoad';
import CommonModel from 'model/commonModel';
import baseModel from 'model/baseModel';

class Ccontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
    }

    onCreate(nowPage, lastPage) {
        var that = this;
        // 请求数据
        CommonModel.getSkills(
            {userId: $jh.prop.userId},
            function (res) {
                if (res.REV) {
                    that.data = res.DATA;
                    $jh.setStorage('getSkills', res.DATA);
                    that.render(nowPage, lastPage)
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
        that.rootDom = $jh.parseDom(skillsTemp.html, that.data)[0];
        nowPage.dom.innerHTML = null;
        nowPage.dom.appendChild(this.rootDom);

        var range = $(that.rootDom).find('.custom-range'),
            $main = $(that.rootDom).find(".main"),
            $skillsWarp = $(that.rootDom).find(".skills_warp"),
            $downCell = $(that.rootDom).find(".skills_down_cell"),
            $refreshImg = $(that.rootDom).find('.skills_down_cell img'),
            $loaderInner = $(that.rootDom).find('.skills_down_cell .loader-inner');

        $(this.rootDom).ready(function () {

            //轮播图组件
            new Swiper('.skills_swiper', {
                autoplay: 5000,//可选选项，自动滑动
                loop: true,
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false,//操作后继续执行autoplay
            });

            //滑动组件
            var myScroll = new JhScroll('.main', {
                click: true,
                disablePointer: true,
                disableTouch: false,
                disableMouse: false,
                deceleration: 0.003,
                DownUpLoad: {
                    downwardHeight: 1.8 * $jh.prop.rem,
                    $Scroll: $main,
                    $scrollWrapper: $skillsWarp,
                    $downCell: $downCell,
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
                    downEnd: function () {
                        // 下拉刷新数据
                        CommonModel.getSkills(
                            {userId: $jh.prop.userId},
                            function (res) {
                                if (res.REV) {
                                    that.data = res.DATA;
                                    $jh.setStorage('getSkills', res.DATA);
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
                    }
                }
            });

            //使用图片懒加载组件
            new LazyLoad({
                offset: 200,
                time: 200,
                iScroll: myScroll.iScroll
            });

            //滑竿组件
            that.initRange(range);
        });
    }

    onBack() {
        baseModel.exitSystem();
    }

    //定义一个初始化滑动条的方法
    initRange(range) {
        range.each(function (key, item) {
            //初始化进度条的渐变颜色
            $(item).css('background', 'linear-gradient(to right, #54c590, white ' + item.value + '%, white)');
            //进度条时间监听
            $(item).bind("input", function (e) {
                var val = item.value;
                item.parentNode.previousElementSibling.querySelector('span').innerHTML = `技能自评分:${val}分`;
                //根据value值修改进度颜色
                $(item).css('background', 'linear-gradient(to right, #54c590, white ' + item.value + '%, white)');
            });
        });
    }
}

$jh.addController('/skills', Ccontroller);