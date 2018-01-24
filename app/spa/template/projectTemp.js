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
                    <div class="list card mycard">
                        <!--栅格布局-->
                        <div class="row">
                            <div class="col col-20">
                                <img src="${img}" data-src="{{name}}" alt=""/>
                            </div>
                            <div class="col">{{item.title}}</div>
                        </div>
                        <div class="row">
                            <div class="col">{{item.jianjie}}</div>
                        </div>
                        <div class="row">
                            <div class="col">{{item.miaoshu}}</div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <span>{{jn}}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">{{item.time}}</div>
                        </div>
                    </div>
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

// <li class="project_other">
//     <img src="${img}" class="jhlazyload testlazyload" data-src="{{name}}" alt="">
//     </li>


