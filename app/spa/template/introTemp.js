/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

var top_hei = require('../img/main/top-hei.jpg');
var moon = require('../img/main/moon.png');
var yun11 = require('../img/main/yun11.png');
var yun21 = require('../img/main/yun21.png');
var yun31 = require('../img/main/yun31.png');
var top_bai = require('../img/main/top-bai.jpg');
var sun = require('../img/main/sun.png');
var yun1 = require('../img/main/yun1.png');
var yun2 = require('../img/main/yun2.png');
var yun3 = require('../img/main/yun3.png');
var myphoto = require('../img/main/myphoto.png');
var left_bottom = require('../img/main/left-bottom.png');
var img1 = require('../img/skill/12333.png');
import newYearLoad from '../img/loading/newYearLoad.png'

let template =
    `<div class="intro">
        <div class="intro_drawer">
            <div class="row myphoto">
                <img src="${myphoto}" alt=""/>
                <span>蒋和</span>
            </div>
            <ul class='mainlist'>
                <li class="menu" data-clickstate="1">
                    <i class="baseInfo"></i>
                    <span>基本信息</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="work"></i>
                    <span>工作经历</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="ehco"></i>
                    <span>教育经历</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="idea"></i>
                    <span>求职意向</span>
                </li>
            </ul>
            <div class="leftbottom"><img src="${left_bottom}" alt=""/></div>
        </div>
        <div class="intro_content">
            <div class="top-pic">
                <div class="intro_menu" data-clickstate="1"></div>
                <div class="pic2">
                    <div class="hei-box">
                        <img class="bg" src="${top_hei}"/>
                        <img class="zhu" src="${moon}"/>
                        <img class="yun1" src="${yun11}"/>
                        <img class="yun2" src="${yun21}"/>
                        <img class="yun3" src="${yun31}"/>
                    </div>
                </div>
                <div class="pic1">
                    <div class="bai-box">
                        <img class="bg" src="${top_bai}"/>
                        <img class="zhu" src="${sun}"/>
                        <img class="yun1" src="${yun1}"/>
                        <img class="yun2" src="${yun2}"/>
                        <img class="yun3" src="${yun3}"/>
                    </div>
                </div>
            </div>
            <div class="intro_scroll" >
                <div class="intro_wrapper">
                    <div class="intro_down_cell">
                        <img class="newyear" src="${newYearLoad}" alt="">
                        <div class="loader-inner">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">个人信息</span>
                                    <span class="tips">简单介绍本人的学历，工作年限，联系方式等基本信息^_^</span>
                                </div>
                                <img src="${yun3}" alt="">
                                <div class="person_info">
                                    <div class="row">
                                        <i class="big_icon"></i>
                                        <span class="big_span mar07">蒋和</span>
                                        <span class="small_span mar03">男</span>
                                        <span class="small_span mar015">24岁</span>
                                        <span class="small_span mar015">本科</span>
                                        <span class="small_span mar03">3年工作经验</span>
                                    </div>
                                    <span class="small_span tips1">曾就职于</span>
                                    <div class="row com">
                                        <span class="small_span mar15">XXXXXXXX</span>
                                        <span class="small_span mar03">高级前端工程师</span>
                                    </div>
                                    <div class="row com">
                                        <span class="small_span mar15">东软集团</span>
                                        <span class="small_span mar03">中级前端工程师</span>
                                    </div>
                                    <div class="row row_info">
                                        <i class="big_icon"></i>
                                        <span class="small_span phone">13095308808</span>
                                        <i class="big_icon"></i>
                                        <span class="small_span email">573748150jh@163.com</span>
                                    </div>
                                </div>
                                <div class="pi_util">
                                    <div class="row">
                                        <i class="big_icon"></i>
                                        <i class="big_icon"></i>
                                    </div>
                                </div>
                                <div class="clear"></div> 
                            </div>
                        </li>
                        <li>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">工作经历</span>
                                    <span class="tips">简单介绍本人从毕业至今的工作经历，职位以及工作描述</span>
                                </div>
                                <img src="${yun3}" alt="">
                                <div class="work_info">
                                    <div class="compdiv">
                                        <div class="row">
                                            <i class="big_icon"></i>
                                            <span class="big_span mar07">XX世界</span>
                                            <span class="small_span mar03">2017.04~2018.04</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">企业性质：</span>
                                            <span class="small_span mar015">不需要融资</span>
                                            <i class="small_icon img025"></i>
                                            <span class="small_span mar07">职位：</span>
                                            <span class="small_span">高级前端工程师</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con"></i>
                                            <p class="cp_con">我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容是内容我是内容</p>
                                        </div>
                                    </div>
                                    <div class="compdiv">
                                        <div class="row">
                                            <i class="big_icon"></i>
                                            <span class="big_span mar07">东软集团</span>
                                            <span class="small_span mar03">2015.07~2017.03</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">企业性质：</span>
                                            <span class="small_span mar015">上市公司</span>
                                            <i class="small_icon img025"></i>
                                            <span class="small_span mar07">职位：</span>
                                            <span class="small_span">前端工程师</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con"></i>
                                            <p class="cp_con">是内容我是内容我是内容我容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容是内容我是内容</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div> 
                            </div>
                        </li>
                        <li>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">求职意向</span>
                                    <span class="tips">描述本人希望从事的职业以及将来的职业规划</span>
                                </div>
                                <img src="${yun3}" alt="">
                                <div class="resume_info">
                                    <div class="compdiv">
                                        <div class="row">
                                            <i class="big_icon"></i>
                                            <span class="big_span mar07">高级前端开发工程师</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">期望行业:</span>
                                            <span class="small_span">互联网,计算机软件</span>
                                            <i class="small_icon img025"></i>
                                            <span class="small_span mar07">薪资:</span>
                                            <span class="small_span">20K+</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con"></i>
                                            <p class="cp_con">是内容我是内容我是内容我容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容是内容我是内容</p>
                                        </div>  
                                    </div>
                                    <div class="compdiv">
                                        <div class="row">
                                            <i class="big_icon"></i>
                                            <span class="big_span mar07">全栈工程师(nodejs)</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">期望行业:</span>
                                            <span class="small_span">互联网,计算机软件</span>
                                            <i class="small_icon img025"></i>
                                            <span class="small_span mar07">薪资:</span>
                                            <span class="small_span">20K+</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con"></i>
                                            <p class="cp_con">是内容我是内容我是内容我容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容是内容我是内容</p>
                                        </div>  
                                    </div>
                                </div>
                                <div class="clear"></div> 
                            </div>
                        </li>
                        <li>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">教育经历</span>
                                    <span class="tips">简单介绍本人就读的大学及专业</span>
                                </div>
                                <img src="${yun3}" alt="">
                                <div class="study_info">
                                    <div class="row">
                                        <i class="big_icon"></i>
                                        <span class="big_span mar07">云南大学</span>
                                        <span class="small_span mar03">2011.09~2015.06</span>
                                    </div>
                                    <div class="row">
                                        <span class="small_span">学历:</span>
                                        <span class="small_span">本科</span>
                                        <span class="small_span mar03">学位:</span>
                                        <span class="small_span">工学学士</span>
                                        <span class="small_span mar03">全日制统招</span>
                                    </div>
                                    <div class="row">
                                        <i class="small_icon img01"></i>
                                        <span class="small_span mar05">专业:</span>
                                        <span class="small_span mar015">软件工程</span>
                                    </div>
                                </div>
                                <div class="clear"></div> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

export default {
    html: template
};


