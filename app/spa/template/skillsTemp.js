/**
 * Created by jianghe on 2017/1/29.
 */
'use strict';

import defaultImg from '../img/main/default.png';
import newYearLoad from '../img/main/newYearLoad.png'

let template =
    `<div class="skills">
        <div class="skills_nav">
            <span>技能</span>
        </div>
        <div class="main">
            <div class="skills_warp">
                <div class="skills_down_cell">
                    <img class="newyear" src="${newYearLoad}" alt="">
                    <div class="loader-inner">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <!--轮播图-->
                <div class="skills_swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="http://img.ijianghe.cn/images/jiangshow/lunbo11.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="http://img.ijianghe.cn/images/jiangshow/lunbo12.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="http://img.ijianghe.cn/images/jiangshow/lunbo11.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="http://img.ijianghe.cn/images/jiangshow/lunbo12.jpg">
                        </div>
                    </div>
                    <!--如果需要分页器-->
                    <div class="swiper-pagination"></div>
                </div>
                <div class="content">
                    <div class="left">
                        {{#leftSkills}}
                        <div class="skillbox">
                            <div class="content">
                                <img class="jhlazyload" src="${defaultImg}" data-src="{{img}}"></img>
                                <span>{{skillsName}}</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用{{useTime}}个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:{{score}}分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume" value="{{score}}">
                            </div>
                        </div>
                        {{/leftSkills}}
                    </div>
                    <div class="right">
                       {{#rightSkills}}
                        <div class="skillbox">
                            <div class="content">
                                <img class="jhlazyload" src="${defaultImg}" data-src="{{img}}"></img>
                                <span>{{skillsName}}</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用{{useTime}}个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:{{score}}分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume" value="{{score}}">
                            </div>
                        </div>
                        {{/rightSkills}}
                    </div>
                    <div class="clear"></div> 
                </div>
            </div>
        </div>
    </div>`;

export default {
    html: template
};


