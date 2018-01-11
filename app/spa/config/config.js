/**
 * Created by jianghe on 2017/12/19.
 */

'use strict';

//写cookie
import cookie from 'lib/cookie/cookie';
cookie('userId', 'jianghe', {});

// 视口组件
import autoViewPort from 'lib/autoViewPort/autoViewPort';
let deviceInfo = autoViewPort();

// 让bable将ES6的api通过babel-polyfill垫片转为ES5，
// 不加这个垫片使用bable-es2015只会讲语法转为ES5 不会将es6的新api转为es5
import 'babel-polyfill';

// 引入spa组件
import $jh from 'lib/spa';
// 设置rem常量
$jh.prop.rem = deviceInfo.htmlFontSize;

/**
 * 公共样式部分
 */
import 'style/base.css';
import 'style/basic.css';

/**
 * 控制器部分
 */
import 'controller/intro';
import 'controller/project';
import 'controller/skills';

// 点击态组件
import cs from 'lib/clickState';
cs.prop();

/**
 * spa初始化
 */
$jh.init({
    home: '/project',//默认首页
    container: '#jhAppWrap',//主页面中的占位标签
});

/**
 * 导航栏初始化
 */
import baseModel from 'model/baseModel';
baseModel.initNav({initPageName: 'project'});