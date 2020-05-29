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
                            <img src="https://images.zirupay.com/images/jiangshow/lunbo11.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://images.zirupay.com/images/jiangshow/lunbo12.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://images.zirupay.com/images/jiangshow/lunbo11.jpg">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://images.zirupay.com/images/jiangshow/lunbo12.jpg">
                        </div>
                    </div>
                    <!--如果需要分页器-->
                    <div class="swiper-pagination"></div>
                </div>
                <div class="content">
                    <div class="left">
                        <div -for="item in leftSkills" class="skillbox">
                            <div class="content">
                                <img class="jhlazyload" src="${defaultImg}" :data-src="item.img"></img>
                                <span>{{item.skillsName}}</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用{{item.useTime}}个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:{{item.score}}分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume" :value="item.score">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div -for="item in rightSkills" class="skillbox">
                            <div class="content">
                                <img class="jhlazyload" src="${defaultImg}" :data-src="item.img"></img>
                                <span>{{item.skillsName}}</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用{{item.useTime}}个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:{{item.score}}分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume" :value="item.score">
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div> 
                </div>
            </div>
        </div>
    </div>`;

export default {
    html: template
};


