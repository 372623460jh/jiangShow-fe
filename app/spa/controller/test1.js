/**
 * Created by jianghe on 2017/12/22.
 */

'use strict';

import $jh from 'lib/spa/spa';
import 'style/allin.css';
import $ from 'jquery';

let template =
    `<div class="author_box" style="background: #2ea1ff">
        <div class="author_content">{@{name}}</div>
        <div class="author_return"></div>
    </div>`;

class Dcontroller extends $jh.SpaController {

    constructor() {
        super();
        this.rootDom = null;
    }

    onCreate(nowPage, lastPage) {
        this.rootDom = $jh.parseDom(template, {name: 'jianghe1'})[0];
        nowPage.dom.appendChild(this.rootDom);
        $(this.rootDom).find(".author_return").on("click", function () {
            $jh.backHandle();
        });
        $(this.rootDom).find(".author_content").on("click", function () {
            $jh.go({
                routeName: '/test2',
                animation: 'easeIn'
            })
        });
    }
}
$jh.addController('/test1', Dcontroller);
