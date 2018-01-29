/**
 * Created by jianghe on 2017/1/29.
 */
'use strict';

let template =
    `<div class="skills">
        <div class="skills_nav">
            <span>技能</span>
        </div>
        <div class="main">
            <!--轮播图-->
            <div class="skills_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="//img.test.ijianghe.cn/images/jiangshow/lunbo11.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="//img.test.ijianghe.cn/images/jiangshow/lunbo12.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="//img.test.ijianghe.cn/images/jiangshow/lunbo11.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="//img.test.ijianghe.cn/images/jiangshow/lunbo12.jpg">
                    </div>
                </div>
                <!--如果需要分页器-->
                <div class="swiper-pagination"></div>
            </div>
            <div class="content"></div>
        </div>
    </div>`;

export default {
    html: template
};


