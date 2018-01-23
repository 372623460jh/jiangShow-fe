/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

import 'style/intro.css';
import introTemp from 'template/introTemp';
import $jh from 'lib/spa/spa';
import $ from 'jquery';
import layer from 'lib/layer/layer';
import Drawer from 'lib/drawer';
import JhScroll from 'lib/jhScroll';
import IScroll from 'lib/iScroll/iscroll-probe';
import CommonModel from 'model/commonModel';


class Acontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
        this.data = {};
    }

    onCreate(nowPage, lastPage) {
        var that = this;
        this.data = {};
        // 请求数据
        CommonModel.getMainInfo(
            {userId: $jh.prop.userId},
            function (res) {
                if (res.REV) {
                    that.data = res.DATA;
                    $jh.setStorage('getMainInfo', res.DATA);
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
        this.rootDom = $jh.parseDom(introTemp.html, that.data)[0];
        nowPage.dom.innerHTML = '';
        nowPage.dom.appendChild(this.rootDom);
        $(this.rootDom).ready(function () {
            // 执行动画
            that.initAnimation();
            var $content = $(that.rootDom).find('.intro_content'),
                $drawer = $(that.rootDom).find('.intro_drawer'),
                $drawer_menu = $(that.rootDom).find('.intro_drawer .menu'),
                $menu = $(that.rootDom).find(".intro_menu"),
                $introScroll = $(that.rootDom).find(".intro_scroll"),
                $scrollWrapper = $(that.rootDom).find(".intro_wrapper"),
                $downCell = $(that.rootDom).find(".intro_down_cell"),
                $refreshImg = $(that.rootDom).find('.intro_down_cell img'),
                $loaderInner = $(that.rootDom).find('.intro_down_cell .loader-inner'),
                $rootDom = $(that.rootDom),
                dra;

            var myScroll = new JhScroll('.intro_scroll', {
                click: true,//false阻止事件冒泡
                // bounce: true,//开启反弹动画
                disablePointer: true, //禁用指针
                disableTouch: false, //禁用触摸
                disableMouse: false, //禁用鼠标
                // bounceEasing: 'elastic',//反弹动画类型
                bounceTime: 500,//反弹动画时间
                scrollX: true, //是否使用x方向滚动条
                freeScroll: true, //自由拖动
                useTransition: true, //使用过渡效果
                deceleration: 0.005, //滚动势能
                // scrollX: false,//禁用x方向滚动条
                // scrollY: true,//开启Y方向滚动条
                // startX: 0,//X方向开始位置px
                // startY: -500,//Y方向开始位置
                // tap: 'unmoveTap',//当滚动区域被点击或者触摸但并没有滚动时，可以让iScroll抛出一个自定义的unmoveTap事件
                // scrollbars: false,//激活滚动条
                DownUpLoad: {
                    downwardHeight: 1.8 * $jh.prop.rem,
                    $Scroll: $introScroll,
                    $scrollWrapper: $scrollWrapper,
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
                        CommonModel.getMainInfo(
                            {userId: $jh.prop.userId},
                            function (res) {
                                if (res.REV) {
                                    that.data = res.DATA;
                                    $jh.setStorage('getMainInfo', res.DATA);
                                    setTimeout(function () {
                                        myScroll.closeRefresh();
                                        that.render(nowPage, lastPage);
                                    }, 500);
                                } else {
                                    $jh.loading.close();
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

            // myScroll.on("scrollStart", function () {
            //     console.log("scrollStart" + this.y);
            // });
            //
            // myScroll.on("scrollEnd", function () {
            //     console.log("scrollEnd" + this.y);
            // });
            //
            // $scroll.on('unmoveTap', function () ，
            //     console.log('unmoveTap');
            // });
            // 移动到某个位置
            // myScroll.scrollTo(0, -600, 2000, IScroll.utils.ease.elastic);

            $drawer_menu.on("click", function (e) {

                let name = e.currentTarget.innerText;
                if (name == '个人信息') {
                    name = 0;
                } else if (name == '工作经历') {
                    name = 1;
                } else if (name == '求职意向') {
                    name = 2;
                } else if (name == '教育经历') {
                    name = 3;
                }

                var hei = -$scrollWrapper.find('ul').children().eq(name).get(0).offsetTop,
                    moveY = (myScroll.iScroll.maxScrollY >= hei) ? myScroll.iScroll.maxScrollY : hei;


                if (dra.moveObj.drawerStatic == 'yes') {
                    $content.css({
                        '-webkit-transition': 'margin-left .15s ease-out',
                        'margin-left': '0'
                    });
                    dra.triggerDrawer();
                }
                setTimeout(function () {
                    myScroll.iScroll.scrollTo(0, moveY, 1500, IScroll.utils.ease.bounce);
                }, 100);
                return false;//阻止冒泡
            });

            //菜单框
            $menu.on("click", function () {
                if (dra.moveObj.drawerStatic == 'yes') {
                    $content.css({
                        '-webkit-transition': 'margin-left .15s ease-out',
                        'margin-left': '0'
                    });
                } else if (dra.moveObj.drawerStatic == 'no') {
                    $content.css({
                        '-webkit-transition': 'margin-left .15s ease-out',
                        'margin-left': '25%'
                    });
                }
                dra.triggerDrawer();
                return false;//阻止冒泡
            });

            //主体部分
            $content.on("click", function () {
                if (dra.moveObj.drawerStatic == 'yes') {
                    dra.triggerDrawer();
                    $content.css({
                        '-webkit-transition': 'margin-left .15s ease-in',
                        'margin-left': '0'
                    });
                }
                return false;//阻止冒泡
            });

            var initwidth = $drawer.width();
            dra = new Drawer({
                dir: 'left',
                container: $rootDom,
                main: $drawer,
                moveFn: function (obj) {
                    var leftscale = ((obj.showPx / initwidth) * 25) + '%';
                    $content.css({
                        '-webkit-transition': 'none',
                        'margin-left': leftscale
                    });
                },
                endFn: function (obj) {
                    var leftscale = ((obj.showPx / initwidth) * 25) + '%';
                    $content.css({
                        '-webkit-transition': 'margin-left .15s ease-out',
                        'margin-left': leftscale
                    });
                }
            });

        });


    };


    onResume(nowPage, lastPage) {
        //重回时启动动画
        this.initAnimation();
    }

    onBack() {
        console.log('关闭Awebview');
    }

    /**
     * 执行动画方法
     */
    initAnimation() {
        var that = this,
            nowpic,//单前显示的图片
            width,//当前界面宽度
            isopen;//菜单栏是否打开
        //初始化页面数据
        initPage();
        // 监听视图完全加载之后的事件
        initTop();
        //初始化该y页面的数据
        function initPage() {
            isopen = false;
            //先计算图片高度
            width = $(window).width();
            var vox_height = width * 0.63;
            $('.intro .bai-box').css('height', vox_height);
            $('.intro .hei-box').css('height', vox_height);
            $('.intro .top-pic').css('height', vox_height);
            $(that.rootDom).find(".intro_scroll").css('top', vox_height);
        }

        //初始化顶部动画
        function initTop() {
            //初始化位置
            initani();
            //先动一下白天动画
            baitian();//2s
            //切换动画
            window.timer = setInterval(function () {
                setTimeout(function () {
                    //改变轮播图布局2S
                    if (nowpic == 'bai') {
                        heitian();
                        change('.intro .bai-box');
                    } else {
                        baitian();
                        change('.intro .hei-box');
                    }
                    //修改zindex,改变的布局复位
                    setTimeout(function () {
                        if (nowpic == 'bai') {
                            $('.intro .pic2').css('z-index', 20);
                            $('.intro .pic1').css('z-index', 10);
                            $('.intro .bai-box').css('margin-left', '0');
                            $('.intro .bai-box .bg').css('left', '0');
                            $('.intro .bai-box .yun1').css('left', '4.4%');
                            $('.intro .bai-box .yun2').css('left', '10.5%');
                            $('.intro .bai-box .yun3').css('left', '60.2%');
                            $('.intro .bai-box .zhu').css('left', '12.8%');
                            //执行未改变的动画4S
                            nowpic = 'hei';
                        } else {
                            $('.intro .pic1').css('z-index', 20);
                            $('.intro .pic2').css('z-index', 10);
                            $('.intro .hei-box').css('margin-left', '0');
                            $('.intro .hei-box .bg').css('left', '0');
                            $('.intro .hei-box .yun1').css('left', '4.4%');
                            $('.intro .hei-box .yun2').css('left', '10.5%');
                            $('.intro .hei-box .yun3').css('left', '60.2%');
                            $('.intro .hei-box .zhu').css('left', '12.8%');
                            //执行未改变的动画4S
                            nowpic = 'bai';
                        }
                    }, 2500)
                }, 2000)
            }, 7000);
        }

        //顶部轮播的初始化事件
        function initani() {
            clearInterval(window.timer);
            $('.intro .pic2').css('z-index', 10);
            $('.intro .pic1').css('z-index', 20);
            $('.intro .bai-box').css('margin-left', '0');
            $('.intro .bai-box .bg').css('left', '0');
            $('.intro .bai-box .yun1').css('left', '4.4%');
            $('.intro .bai-box .yun2').css('left', '10.5%');
            $('.intro .bai-box .yun3').css('left', '60.2%');
            $('.intro .bai-box .zhu').css('left', '12.8%');
            $('.intro .hei-box').css('margin-left', '0');
            $('.intro .hei-box .bg').css('left', '0');
            $('.intro .hei-box .yun1').css('left', '4.4%');
            $('.intro .hei-box .yun2').css('left', '10.5%');
            $('.intro .hei-box .yun3').css('left', '60.2%');
            $('.intro .hei-box .zhu').css('left', '12.8%');
            //当前显示图片
            nowpic = 'bai';
        }

        //白天云彩的波动动画
        function baitian() {
            itemani($('.intro .bai-box .yun1'), 0.03);
            itemani($('.intro .bai-box .yun2'), -0.05);
            itemani($('.intro .bai-box .yun3'), 0.04);
            itemani($('.intro .bai-box .zhu'), 0.07);
        }

        //晚上云彩的波动动画
        function heitian() {
            itemani($('.intro .hei-box .yun1'), 0.03);
            itemani($('.intro .hei-box .yun2'), -0.05);
            itemani($('.intro .hei-box .yun3'), 0.04);
            itemani($('.intro .hei-box .zhu'), 0.07);
        }

        //某元素的波动动画
        function itemani(ele, xishu) {
            setTimeout(function () {
                var bz = true;
                var time = 0;
                //获取该元素的left
                var ele_left = parseInt(ele.css('left'));
                var ele_left_zuo = ele_left - width * xishu;
                var ele_left_you = ele_left + width * xishu;
                var timer = setInterval(function () {
                    if (time == 3) {
                        ele.css('left', ele_left);
                        clearInterval(timer);
                    } else {
                        if (bz) {
                            ele.css('left', ele_left_zuo + "px");
                            bz = false;
                        } else {
                            ele.css('left', ele_left_you + "px");
                            bz = true;
                        }
                    }
                    time++;
                }, parseInt(Math.random() * 500) + 800);
            }, 50);
        }

        //改变布局的方法
        function change(name) {
            $(name).css('margin-left', '100%');
            $(name + ' .bg').css('left', '-100%');
            $(name + ' .yun1').css('left', '-95.6%');
            $(name + ' .yun2').css('left', '-89.5%');
            $(name + ' .yun3').css('left', '-30.8%');
            $(name + ' .zhu').css('left', '-87.2%');
        }
    }
}

$jh.addController('/intro', Acontroller);


