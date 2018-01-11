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

// 引入spa组件
import $jh from 'lib/spa';

$jh.prop.rem = deviceInfo.htmlFontSize;

/**
 * 公共样式部分
 */
import base from '../style/base.css';
import basic from '../style/basic.css';

/**
 * 控制器部分
 */
import index from '../controller/intro';
import main from '../controller/project';
import author from '../controller/skills';

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
import baseModel from '../model/baseModel';
baseModel.initNav({initPageName: 'project'});