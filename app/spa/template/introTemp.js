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
var newYearLoad = require('../img/main/newYearLoad.png');

var big1 = require('../img/main/big1.png');
var big2 = require('../img/main/big2.png');
var big3 = require('../img/main/big3.png');
var big4 = require('../img/main/big4.png');
var big5 = require('../img/main/big5.png');
var big6 = require('../img/main/big6.png');
var big7 = require('../img/main/big7.png');
var big8 = require('../img/main/big8.png');

var small1 = require('../img/main/small1.png');
var small2 = require('../img/main/small2.png');
var small3 = require('../img/main/small3.png');

var card1 = require('../img/main/card1.png');
var card2 = require('../img/main/card2.png');
var card3 = require('../img/main/card3.png');
var card4 = require('../img/main/card4.png');

let template =
    `<div class="intro">
        <div class="intro_drawer">
            <div class="row myphoto">
                <img src="${myphoto}" alt=""/>
                <span>{{personInfo.name}}</span>
            </div>
            <ul class='mainlist'>
                <li class="menu" data-clickstate="1">
                    <i class="baseInfo"></i>
                    <span>个人信息</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="work"></i>
                    <span>工作经历</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="ehco"></i>
                    <span>求职意向</span>
                </li>
                <li class="menu" data-clickstate="1">
                    <i class="idea"></i>
                    <span>教育经历</span>
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
                        <li -if='personInfo'>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">个人信息</span>
                                    <span class="tips">简单介绍本人的学历，工作年限，联系方式等基本信息^_^</span>
                                </div>
                                <img src="${card4}" alt="">
                                <div class="person_info">
                                    <div class="row">
                                        <i class="big_icon">
                                            <img src="${big1}">
                                        </i>
                                        <span class="big_span mar07">{{personInfo.name}}</span>
                                        <span class="small_span mar03">{{personInfo.sex}}</span>
                                        <span class="small_span mar015">{{personInfo.age}}</span>
                                        <span class="small_span mar015">{{personInfo.education}}</span>
                                        <span class="small_span mar03">{{personInfo.workTime}}</span>
                                    </div>
                                    <span class="small_span tips1">曾就职于</span>
                                    <div -for='item in personInfo.work' class="row com">
                                        <span class="small_span mar15">{{item.company}}</span>
                                        <span class="small_span mar03">{{item.position}}</span>
                                    </div>
                                    <div class="row row_info">
                                        <i class="big_icon">
                                            <img src="${big2}">
                                        </i>
                                        <span class="small_span phone">{{personInfo.tel}}</span>
                                        <i class="big_icon">
                                            <img src="${big3}">
                                        </i>
                                        <span class="small_span email">{{personInfo.email}}</span>
                                    </div>
                                </div>
                                <div class="pi_util">
                                    <div class="row">
                                        <i class="big_icon">
                                            <img src="${big4}">
                                        </i>
                                        <i class="big_icon">
                                            <img src="${big5}">
                                        </i>
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
                                <img src="${card2}" alt="">
                                <div class="work_info">
                                    <div -for='item in workInfo' class="compdiv">
                                        <div class="row">
                                            <i class="big_icon">
                                                <img src="${big7}">
                                            </i>
                                            <span class="big_span mar07">{{item.company}}</span>
                                            <span class="small_span mar03">{{item.timeTrunk}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">企业性质:</span>
                                            <span class="small_span mar015">{{item.companyNature}}</span>
                                            <i class="small_icon img025">
                                                <img src="${small3}">
                                            </i>
                                            <span class="small_span mar07">职位:</span>
                                            <span class="small_span">{{item.position}}</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con">
                                                <img src="${small2}">
                                            </i>
                                            <p class="cp_con">{{item.jobDesc}}</p>
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
                                <img src="${card1}" alt="">
                                <div class="resume_info">
                                    <div -for='item in intension' class="compdiv">
                                        <div class="row">
                                            <i class="big_icon">
                                                <img src="${big8}">
                                            </i>
                                            <span class="big_span mar07">{{item.position}}</span>
                                        </div>
                                        <div class="row">
                                            <span class="small_span">期望行业:</span>
                                            <span class="small_span">{{item.trade}}</span>
                                            <i class="small_icon img025">
                                                <img src="${small1}">
                                            </i>
                                            <span class="small_span mar07">薪资:</span>
                                            <span class="small_span">{{item.pay}}</span>
                                        </div>
                                        <div class="row work_cont">
                                            <i class="small_icon img_con">
                                                <img src="${small2}">
                                            </i>
                                            <p class="cp_con">{{item.intensionDesc}}</p>
                                        </div>  
                                    </div>
                                </div>
                                <div class="clear"></div> 
                            </div>
                        </li>
                        <li -if='education'>
                            <div class="info">
                                <div class="pi_top">
                                    <span class="title">教育经历</span>
                                    <span class="tips">简单介绍本人就读的大学及专业</span>
                                </div>
                                <img src="${card3}" alt="">
                                <div class="study_info">
                                    <div class="row">
                                        <i class="big_icon">
                                            <img src="${big6}">
                                        </i>
                                        <span class="big_span mar07">{{education.school}}</span>
                                        <span class="small_span mar03">{{education.learnTime}}</span>
                                    </div>
                                    <div class="row">
                                        <span class="small_span">学历:</span>
                                        <span class="small_span">{{education.education}}</span>
                                        <span class="small_span mar03">学位:</span>
                                        <span class="small_span">{{education.degree}}</span>
                                        <span class="small_span mar03">{{education.nature}}</span>
                                    </div>
                                    <div class="row">
                                        <i class="small_icon img01">
                                            <img src="${small3}">
                                        </i>
                                        <span class="small_span mar05">专业:</span>
                                        <span class="small_span mar015">{{education.major}}</span>
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


