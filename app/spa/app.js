/**
 * Created by jianghe on 2017/12/19.
 */

'use strict';

// 写cookie
// import cookie from 'lib/cookie/cookie';
// cookie('userId', 'jianghe', {domain: '192.168.0.105:8081', path: '/'});

// 视口组件
import autoViewPort from 'lib/autoViewPort/autoViewPort';
let deviceInfo = autoViewPort();

// 让bable将ES6的api通过babel-polyfill垫片转为ES5，
// 不加这个垫片使用bable-es2015只会讲语法转为ES5 不会将es6的新api转为es5
import 'babel-polyfill';

// 引入spa组件
import $jh from 'lib/spa/spa';
// 设置rem常量
$jh.prop.rem = deviceInfo.htmlFontSize;
$jh.prop.userId = 'jianghe';

// 关联返回控制器和js原生Android接口
import jsInterface from 'lib/jsInterface/jsInterface';
jsInterface.commonMethod.setBackHandlerCB($jh.backHandle);

/**
 * 公共样式部分
 */
import 'style/common/base.css';
import 'style/common/basic.css';

/**
 * 控制器部分
 */
import 'controller/intro';
import 'controller/project';
import 'controller/skills';
import 'controller/projectDetial';

// 点击态组件
import cs from 'lib/clickState/clickState';
cs.prop();

/**
 * spa初始化
 */
$jh.init({
    home: '/intro',//默认首页
    container: '#jhAppWrap',//主页面中的占位标签
    errRoute: '/404'//错误页路由名不配置默认是/error
});

/**
 * 导航栏初始化
 */
import baseModel from 'model/baseModel';
baseModel.initNav({initPageName: 'intro'});