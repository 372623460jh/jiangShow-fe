/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

import newYearLoad from '../img/main/newYearLoad.png';
import defaultImg from '../img/main/default.png';

let template =
    `<div class="project">
        <div class="project_nav">
            <span>项目</span>
        </div>
        <div class="project_scroll">
            <div class="scroll_wrapper">
                <div class="down_cell">
                    <img class="newyear" src="${newYearLoad}" alt="">
                    <div class="loader-inner">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <ul>
                    <li class="project_swiper">
                        <!--轮播图-->
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="https://images.zirupay.com/images/jiangshow/lunbo1.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="https://images.zirupay.com/images/jiangshow/lunbo2.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="https://images.zirupay.com/images/jiangshow/lunbo1.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="https://images.zirupay.com/images/jiangshow/lunbo2.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                        </div>
                        <!--&lt;!&ndash;如果需要分页器&ndash;&gt;-->
                        <div class="swiper-pagination"></div>
                    </li>
                    <!--卡片-->
                    <li -for="item in project" class="card" data-clickstate="1" :data-index="item.index">
                        <div class="title">
                            <img class="jhlazyload" src="${defaultImg}" :data-src="item.img"></img>
                            <span>{{item.name}}</span>
                        </div>
                        <div class="background">{{item.projectBg}}</div>
                        <div class="detial">{{item.projectDesc}}</div>
                        <div class="skills">
                            <span -for="item1 in item.skills">{{item1.name}}</span>
                            <div class="clear"></div> 
                        </div>
                        <span class="time">{{item.time}}</span>
                    </li>
                </ul>
                <div class="up_cell">
                    <span>加载更多...</span>
                </div>
            </div>
        </div>
    </div>`;

export default {
    html: template
};


