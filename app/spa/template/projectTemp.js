/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

import newYearLoad from '../img/loading/newYearLoad.png';
import defaultImg from '../img/details/default.png';

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
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo1.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo2.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo1.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo2.jpg">
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                        </div>
                        <!--&lt;!&ndash;如果需要分页器&ndash;&gt;-->
                        <div class="swiper-pagination"></div>
                    </li>
                    {{#project}}  
                    <!--卡片-->
                    <li class="card" data-clickstate="1" data-index="{{index}}">
                        <div class="title">
                            <img class="jhlazyload" src="${defaultImg}" data-src="{{img}}"></img>
                            <span>{{name}}</span>
                        </div>
                        <div class="background">{{projectBg}}</div>
                        <div class="detial">{{projectDesc}}</div>
                        <div class="skills">
                            {{#skills}}
                            <span>{{name}}</span>
                            {{/skills}}
                            <div class="clear"></div> 
                        </div>
                        <span class="time">{{time}}</span>
                    </li>
                    {{/project}}
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


