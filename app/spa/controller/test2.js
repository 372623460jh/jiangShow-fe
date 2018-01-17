/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa';
import 'style/allin.css';
import $ from 'jquery';

let template = '' +
    '<div class="author_box" style="background: #ff5f61">' +
    '   <div class="author_content">test2</div>' +
    '   <div class="author_return"></div>' +
    '</div>';

class Ccontroller extends $jh.SpaCon {

    constructor() {
        super();
        this.rootDom = null;
    }

    onCreate(nowPage, lastPage) {
        this.rootDom = $jh.parseDom(template)[0];
        nowPage.dom.appendChild(this.rootDom);
        $(this.rootDom).find(".author_return").on("click", function () {
            $jh.backHandle();
        });
        $(this.rootDom).find(".author_content").on("click", function () {
            $jh.go({
                routeName: '/test3',
                animation: 'easeIn'
            });
        });
    }

    onBack() {
        $jh.goBack({
            animation: 'easeOut'
        });
    }
}

export default $jh.controller['/test2'] = Ccontroller;
