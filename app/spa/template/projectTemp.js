/**
 * Created by jianghe on 2017/12/19.
 */
'use strict';

import newYearLoad from '../img/loading/newYearLoad.png'
import img from '../img/skill/12333.png'

let template =
    `<div class="project">
        <div class="project_nav">
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
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">slider1</div>
                            <div class="swiper-slide">slider2</div>
                            <div class="swiper-slide">slider3</div>
                        </div>
                    </li>
                    <li class="project_other">
                        <canvas id="c1"></canvas>
                    </li>
                    {{#imgList}}
                    <li class="project_other">
                        <img src="${img}" class="jhlazyload testlazyload" data-src="{{name}}" alt="">
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


