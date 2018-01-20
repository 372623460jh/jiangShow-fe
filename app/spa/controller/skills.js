/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa';
import 'style/allin.css';
import $ from 'jquery';

let rootDom,
    template = '' +
        '<div class="author_box">' +
        '   <div class="author_content">技能页面</div>' +
        '   <div class="author_return"></div>' +
        '</div>';

class Ccontroller extends $jh.SpaController {

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
        console.log('关闭webview');
    }
}

$jh.addController('/skills', Ccontroller);
