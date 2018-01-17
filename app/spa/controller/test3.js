/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa';
import 'style/allin.css';
import $ from 'jquery';

let template = '' +
    '<div class="author_box" style="background: #ebff43">' +
    '   <div class="author_content">test3</div>' +
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

        });
    }

    onBack() {
        $jh.goBack({
            routeName: '/test1',
            animation: 'easeOut'
        });
    }
}

export default $jh.controller['/test3'] = Ccontroller;
