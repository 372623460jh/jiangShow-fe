/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

var zhuangshi = require('../img/main/zhuangshi1.png');

let template =
    `<div class="projectDetail">
        <div class="header">
            <div class="return" data-clickstate="1">
                <i></i>
            </div>
            <span class="title">{{name}}</span>
            <div class="heart" data-clickstate="1">
                <i></i>
            </div>
        </div>
        <div class="center">
            <img :src="img" alt="">
            <div class="info">
                <span class="appName">{{alias}}</span>
                <span class="comName">{{company}}</span>
            </div>
            <div class="download">
                <span -if="androidUrl" class="content android" data-clickstate="1">Android</span>
                <span -if="iosUrl" class="content ios" data-clickstate="1">Ios</span>
            </div>          
        </div>
        <div class="detialScroll">
            <ul>
                <li class="skills">
                    <span -for="item in skills">{{item.name}}</span>
                    <div class="clear"></div> 
                </li>
                <li -if="hasImg" class="showdom">
                    <img class="photo" :src="img" alt="">
                    <span class="title">项目截图</span>
                    <!--轮播图-->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div -for="item in imgList" class="swiper-slide"><img :src="item.url" alt=""/></div>
                        </div>
                    </div>
                </li>
                <li -if="projectBg" class="showdom">
                    <img class="zhuangshi" src="${zhuangshi}" alt="">
                    <span class="title">项目背景</span>
                    <span class="content">{{projectBg}}</span>
                </li>
                <li -if="projectTask" class="showdom">
                    <img class="zhuangshi" src="${zhuangshi}" alt="">
                    <span class="title">项目任务</span>
                    <span class="content">{{projectTask}}</span>
                </li>
                <li -if="projectDesc" class="showdom">
                    <img class="zhuangshi" src="${zhuangshi}" alt="">
                    <span class="title">工作描述</span>
                    <span class="content">{{projectDesc}}</span>
                </li>
                <li -if="projectRes" class="showdom">
                    <img class="zhuangshi" src="${zhuangshi}" alt="">
                    <span class="title">项目结果</span>
                    <span class="content">{{projectRes}}</span>
                </li>
            </ul>        
        </div>
        <div class="bottom"></div>
    </div>`;

export default {
    html: template
};


