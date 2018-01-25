/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

import newYearLoad from '../img/loading/newYearLoad.png'
import img from '../img/skill/12333.png'

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
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo1.jpg"></img>  
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo2.jpg"></img>  
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo1.jpg"></img>  
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-lazy" data-src="//img.test.ijianghe.cn/images/jiangshow/lunbo2.jpg"></img>  
                                <div class="swiper-lazy-preloader"></div>
                            </div>
                        </div>
                        <!--&lt;!&ndash;如果需要分页器&ndash;&gt;-->
                        <div class="swiper-pagination"></div>
                    </li>
                    {{#imgList}}
                    <!--卡片-->
                    <li class="card" data-clickstate="1">
                        <div class="title">
                            <img src="${img}"></img>    
                            <span>{{projectName}}</span>
                        </div>
                        <div class="background">{{bg}}</div>
                        <div class="detial">{{detial}}</div>
                        <div>
                            {{#skills}}
                            <span>{{skill}}</span>
                            {{/skills}}
                        </div>
                        <div>{{time}}</div>
                    </li>
                    {{/imgList}}
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


