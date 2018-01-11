/**
 * Created by jianghe on 2018/1/8.
 * 扩展iScroll组件
 * 下拉刷新和上滑加载更多组件
 */
'use strict';

import IScroll from 'lib/iScroll/iscroll-probe';

class JhScroll {
    constructor(el, options) {
        this.iScroll;
        options.probeType = 3;
        //扩展参数
        this.handle = {};
        this.handleOptions(el, options);
    }

    //处理选项
    handleOptions(el, options) {
        let that = this;
        if (options.DownUpLoad) {
            let oldMaxScrollY,
                inRefresh = false;//是否处于刷新中
            //下拉刷新和上滑加载扩展
            this.handle = options.DownUpLoad;
            let dh = this.handle.downwardHeight,//下滑固定高度
                uh = this.handle.upwardHeight,//上滑固定高度
                $sc = this.handle.$Scroll,//滑动的最外层盒子 == el
                $sw = this.handle.$scrollWrapper,//滑动的盒子  el >
                $dc = this.handle.$downCell,//下滑展示的盒子
                $uc = this.handle.$upCell;//上滑展示的盒子

            let downMove = this.handle.downMove,//向下移动回调方法
                upMove = this.handle.upMove,//向上移动回调
                downEnd = this.handle.downEnd,//向下移动抬起回调
                upEnd = this.handle.upEnd;//向上移动抬起回调

            //设置最小高度为父容器+1防止IScroll不能滑动（防止不满一页）
            $sw.css({
                'min-height': $sc.height() + 1
            });

            that.iScroll = new IScroll(el, options);

            //记录IScroll的最大移动Y值
            oldMaxScrollY = this.iScroll.maxScrollY;

            //使用Model.throttleTwo生成节流后的scroll方法
            var onscroll = that.throttleTwo(function () {
                if (that.iScroll.y > 0 && $sc.inToucch && !inRefresh && $dc) {
                    $dc.isShow = true;
                    let moveY = that.iScroll.y;
                    $dc.css({
                        'height': moveY > dh ? dh : moveY,
                        '-webkit-transition': 'none'
                    });
                    //调用向下滑动回调height是downCell的实时高度，moveY是iscroll下滑的高度
                    downMove({height: moveY > dh ? dh : moveY, moveY: moveY});
                }
                if (that.iScroll.y < that.iScroll.maxScrollY && $sc.inToucch && !inRefresh && $uc) {
                    $uc.isShow = true;
                    var upHeight = (that.iScroll.maxScrollY - that.iScroll.y) > uh ? uh : (that.iScroll.maxScrollY - that.iScroll.y);
                    $uc.css({
                        'height': upHeight,
                        '-webkit-transition': 'none'
                    });
                    //调用向下滑动回调height是downCell的实时高度，moveY是iscroll下滑的高度
                    upMove({height: upHeight, moveY: that.iScroll.maxScrollY - that.iScroll.y});
                    that.iScroll.maxScrollY = oldMaxScrollY - upHeight;
                }
            }, 17);
            that.iScroll.on('scroll', onscroll);

            $sc.on('touchstart', function (e) {
                $sc.inToucch = true;
            });

            $sc.on('touchend', function (e) {
                $sc.inToucch = false;
                if ($dc && $dc.isShow) {
                    $dc.isShow = false;
                    if (that.iScroll.y < dh) {
                        $dc.css({
                            'height': '0rem',
                            '-webkit-transition': 'height .15s ease-out'
                        });
                        setTimeout(function () {
                            that.iScroll.refresh();
                        }, 150);
                    } else {
                        inRefresh = true;
                        that.closeRefresh = function () {
                            $dc.css({
                                'height': '0rem',
                                '-webkit-transition': 'none'
                            });
                            that.iScroll.refresh();
                            inRefresh = false;
                        };
                        setTimeout(function () {
                            downEnd();
                        }, 100);
                    }
                }
                if ($uc && $uc.isShow) {
                    $uc.isShow = false;
                    if ((that.iScroll.maxScrollY - that.iScroll.y) < uh) {
                        $uc.css({
                            'height': '0rem',
                            '-webkit-transition': 'height .15s ease-out'
                        });
                        setTimeout(function () {
                            that.iScroll.refresh();
                        }, 150)
                    } else {
                        inRefresh = true;
                        that.closeRefresh = function () {
                            $uc.css({
                                'height': '0rem',
                                '-webkit-transition': 'none'
                            });
                            that.iScroll.refresh();
                            inRefresh = false;
                        };
                        setTimeout(function () {
                            upEnd();
                        }, 100);
                    }
                }
            });
        }
    }

    /**
     * 关闭刷新的方法
     */
    closeRefresh() {
    }

    /**
     * 节流方法2
     * @param method 回调方法
     * @param delay 间隔delay内method只会被执行1次
     * @returns {Function}
     */
    throttleTwo(method, delay) {
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
    }
}

export default JhScroll;
