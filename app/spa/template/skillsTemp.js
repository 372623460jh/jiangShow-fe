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
            <div>
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
                <div class="content">
                    <div class="left">
                        <div class="skillbox">
                            <div class="content">
                                <img/> 
                                <span>Java</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用48+个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:85分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume" value="30">
                            </div>
                        </div>
                        <div class="skillbox">
                            <div class="content">
                                <img/> 
                                <span>Java</span>
                            </div>
                            <div class="usetime">
                                <i></i>
                                <span>技能使用48+个月</span>
                            </div>
                            <div class="rank">
                                <i></i>
                                <span>技能自评分:85分</span>
                            </div>
                            <div class="rankbar">
                                <input type="range" class="custom-range" min="0" max="100" name="volume">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="skillbox">
                            <div class="content"></div>
                            <div class="usetime"></div>
                            <div class="rank"></div>
                            <div class="rankbar"></div>
                        </div>
                        <div class="skillbox">
                            <div class="content"></div>
                            <div class="usetime"></div>
                            <div class="rank"></div>
                            <div class="rankbar"></div>
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


