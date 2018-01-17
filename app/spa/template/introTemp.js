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
                                        <span class="big_span name">蒋和</span>
                                        <span class="small_span sex">男</span>
                                        <span class="small_span age">24岁</span>
                                        <span class="small_span edu">本科</span>
                                        <span class="small_span exp">3年工作经验</span>
                                    </div>
                                    <span class="small_span tips1">曾就职于</span>
                                    <div class="row com">
                                        <span class="small_span company">XXXXXXXX</span>
                                        <span class="small_span position">高级前端工程师</span>
                                    </div>
                                    <div class="row com">
                                        <span class="small_span company">东软集团</span>
                                        <span class="small_span position">中级前端工程师</span>
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
                                <div class="work_info"></div>
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
                                <div class="resume_info"></div>
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
                                <div class="study_info"></div>
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


