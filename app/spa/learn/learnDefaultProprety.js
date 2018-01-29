'use strict';

// var data = {
//     name: 'jianghe',
//     worker: [
//         {
//             company: 'test1',
//             add: 'add1'
//         },
//         {
//             company: 'test3',
//             add: 'add2'
//         }
//     ]
// };
// // var span = document.querySelector('.name');
//
// /**
//  * 循环遍历data中的每一个属性，给每一个属性添加一个观察者
//  * @param data
//  * @constructor
//  */
// function addObserver(data) {
//     if (!data || typeof data !== 'object') {
//         //非对象不需要添加观察者
//         return;
//     }
//     Object.keys(data).forEach(function (key) {
//         //遍历属性给每一个属性添加观察者
//         Observer(data, key, data[key]);
//     })
// }
// /**
//  * 观察者
//  * @param data
//  * @param key
//  * @constructor
//  */
// function Observer(data, key, val) {
//     //给子属性添加观察者
//     addObserver(val);
//     // console.log('给' + key + '添加观察者');
//     //利用defineProperty给属性增加set和get监听（数据劫持）
//     Object.defineProperty(data, key, {
//         get: function () {
//             // console.log("读取了" + key + "属性：" + val);
//             return val;
//         },
//         set: function (newValue) {
//             if (val === newValue) return;
//             console.log(key + "从" + val + "变为了" + newValue);
//             val = newValue;
//         },
//         configurable: false,//是否允许删除该属性
//         enumerable: true//是否允许被枚举
//     });
// }
//
//
// //循环给data创建观察者
// addObserver(data);
//
// // data.name = 'change value';
// // data.name;
//
// // data.worker[0].company = 'company1';
// // data.worker[0].company;
//
// data.worker[1].company = 'test1';
// // data.worker[1].company;
// //
// // data.worker = {company: 'test1', add: 'add1'};
// // data.worker;
// //
// // data.worker[1].company = 'company2';
// data.worker.company;
//
//
// // //获取值
// // console.log(obj.name);  //hello
// //
// // //设置值
// // obj.name = 'change value';
// // setTimeout(function () {
// //     obj.name = 'zhangsan';
// // }, 2000);
//
// // console.log(obj.name); //change value
//
// function parseDom(html) {
//     var objE = document.createElement("div");
//     objE.innerHTML = html;
//     var domList = objE.childNodes;
// }
//
// //将node转化为fragment片段
// function nodeToFragment(domList) {
//     var fragment = document.createDocumentFragment();
//     for (var n = 0; n < domList.length; n++) {
//         var child = domList[n].firstChild;
//         while (child) {
//             // 将Dom元素移入fragment中
//             fragment.appendChild(child);
//             child = el.firstChild
//         }
//     }
//
//     // var child = el.firstChild;
//     // while (child) {
//     //     // 将Dom元素移入fragment中
//     //     fragment.appendChild(child);
//     //     child = el.firstChild
//     // }
//     // return fragment;
// }
//

//
//
// // var parentBox = document.querySelector('#parentBox');


// function tmpl(str, data) {
//     var $ = '$' + (+new Date),
//         fn = function (data) {
//             var i,
//                 variable = [$],
//                 value = [[]];
//             for (i in data) {
//                 variable.push(i);
//                 value.push(data[i]);
//             }
//             return (new Function(variable, fn.$)).apply(data, value).join("");
//         };
//
//     //将模板解析成函数
//     fn.$ = fn.$ || $ + ".push('"
//         + str.replace(/\\/g, "\\\\")
//             .replace(/'/g, "\\'")  //防止单括号错误
//             .replace(/[\r\t\n]/g, " ")
//             .split("[:").join("\t")
//             .replace(/((^|:])[^\t]*)'/g, "$1\r")
//             .replace(/\t=([^\?]*?):]/g, "',$1,'")
//             .replace(/\t=([^\?]*?)\?(.*?):]/g, "',this.$1||'$2','")   //  [:=data?:]  [:=data?任何内容:]
//             .split("\t").join("');")
//             .split(":]").join($ + ".push('")
//             .split("\r").join("\\'")
//         + "');return " + $;
//
//     //如果未定义data则返回编译好的函数，使用时直接传入数据即可，
//     //省去每次解析成函数的时间
//     return data ? fn(data) : fn;
// };
//
var tpl = '[: for(var k in ary){ var one=ary[k]; :]' +
    '<p>[:=one:]</p>' +
    '[: } :]';
var data = {ary: [123, 'abc']};
var div = tmpl(tpl, data);
console.log(div); //</p>123</p><p>abc</p>


/**
 *
 * 原理:通过遍历data,给data的每一个属性增加setter和getter方法（数据拦截方法，读写数据就会被拦截），
 * 每个data属性都有一个观察者容器实例用来保存所有和该数据相关的观察者，通过遍历dom元素
 *
 *
 * 数据监听者和dom观察者之间的关系是多对多的
 *
 * 1个数据监听者可以对应多个dom观察者；
 * 简言之：1个数据的改变可以驱动多个dom的多个属性改变（具体是哪些dom，哪些属性放在WatcherVessel（dom观察者容器）对象中）
 *
 * 1个dom观察者可以对应多个数据监听者；
 * 简言之：1个dom对象的属性可能由多个数据来决定（具体是哪些数据在Watcher对象的matchResult属性下）
 *
 * 1个dom对象可以有多个dom观察者：如文本观察者 类名观察者 自定义属性观察者；每个观察者都对应多个数据
 */

/**
 * 监听者
 * @param he 组件实例山下文
 * @param matchResult 占位符数组；如：
 * '<div>{{name}}{{age}}</div>'对应的就是:
 * [{perch: '{{name}}',result:'name'},{perch: '{{age}}',result:'age'}
 * @param cb 数据改变时回调方法
 * @constructor
 */
function Watcher(he, matchResult, cb) {
    this.he = he;
    this.matchResult = matchResult;
    this.cb = cb;
    this.value = this.get();  // 将自己添加到订阅器的操作
}

Watcher.prototype = {
    update: function () {
        this.run();
    },
    run: function () {
        var value = this.he.data[this.matchResult];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.he, value, oldVal);
        }
    },
    get: function () {
        Dep.target = this;  // 缓存自己
        /**
         * 主动执行以下数据拦截(监听器)的get方法让数据拦截器来绑定缓存中的自己(观察者)
         * 建立监听器和观察者之间的关联：
         * data <=> 监听器 <=> 观察者 <=> 关系映射器 <=> dom
         * data的改变会被监听器拦截到,监听器找到相应的观察者
         */
        var value = this.he.data[this.matchResult];
        Dep.target = null;  // 释放自己
        return value;
    }
};

/**
 * 观察者容器类
 * @constructor
 */
function WatcherVessel() {
    this.subs = [];
}
WatcherVessel.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
};
/**
 * 缓存当前需要和数据监听者关联的dom观察者
 * 通过主动触发数据监听者的get方法来建立数据监听者和dom观察者的联系
 */
WatcherVessel.target = null;


/**
 * 映射器用来建立dom(节点)与watcher(观察者)之间的联系(根据dom对象中的占位符来创建观察者)
 * @constructor
 */
function Mapper(he) {
    //需要映射器关联的dom对象
    this.dom = he.dom;
    //组件上下文对象
    this.he = he;
    this.init();
};
Mapper.prototype = {
    constructor: Mapper,
    init: function () {
        if (this.dom) {
            this.fragment = this.nodeToFragment(this.dom);
            this.createRelationship(this.fragment);
        } else {
            console.log('组件未传入dom');
        }
    },

    /**
     * 将节点转化为文档碎片
     * @param el
     * @return {DocumentFragment}
     */
    nodeToFragment: function (el) {
        var fragment = document.createDocumentFragment();
        var child = el.firstChild;
        while (child) {
            // 将Dom元素移入fragment中
            fragment.appendChild(child);
            child = el.firstChild
        }
        return fragment;
    },

    /**
     * 建立dom和观察的关系
     */
    createRelationship: function (fragment) {
        var that = this,
            childNodes = fragment.childNodes;
        [].slice.call(childNodes).forEach(function (node) {
            if (that.isElementNode(node)) {
                //Element节点的处理

                //处理类名

                //处理自定义属性

                if (node.childNodes && node.childNodes.length) {
                    //如果还有子节点递归建立关系
                    that.createRelationship(node);
                }
            } else if (that.isTextNode(node)) {
                //text节点的处理
                var reg = /\{\{([A-Za-z0-9_\.]+)\}\}/g,//匹配占位符的正则
                    matchResult = [],//保存匹配结果
                    text = node.textContent;//获取元素的纯文本内容

                /**
                 * 匹配规则{{}}中只允许出现A-Z a-z 0-9 _ .
                 * 如果出现其他特殊字符会直接把{{}}整体当做字串处理
                 */
                while (true) {
                    var arr = reg.exec(text);
                    if (!arr) break;
                    matchResult.push({
                        perch: arr[0],
                        result: arr[1]
                    });
                }

                if (matchResult.length > 0) {
                    //只要匹配中matchResult就是一个数组
                    that.textRule(node, matchResult, text);
                }
            }
        });
    },

    /**
     * 文本的更新规则
     * @param node
     * @param matchResult
     * @param ancestorText
     */
    textRule(node, matchResult, ancestorText){
        var that = this,
            initText = ancestorText;//初始化文本内容
        matchResult.forEach(function (item) {
            initText = initText.replace(item.perch, that.he.data[item.result])
        });
        this.updateText(node, initText);
        /**
         * 创建观察者
         */
        new Watcher(this.he, matchResult, function (value) {
            matchResult.forEach(function (item) {
                initText = initText.replace(item.perch, that.he.data[item.result])
            });
            self.updateText(node, value);
        });
    },

    /**
     * 更新节点的文本内容
     * @param node
     * @param value
     */
    updateText: function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },

    /**
     * 判断节点是不是text节点
     * @param node
     * @return {boolean}
     */
    isTextNode: function (node) {
        return node.nodeType == 3;
    },

    /**
     * 判断节点是不是Element节点
     * @param node
     * @return {boolean}
     */
    isElementNode: function (node) {
        return node.nodeType == 1;
    },
};

/**
 * 组件对象
 * @param options
 */
function He(options) {
    this.data = options.data || '';//数据
    this.dom = options.el;//数据对应的dom对象

    //给数据添加数据拦截事件
    this.addObserver(this.data);

    //数据拦截事件添加完后需要建立数据与dom的映射关系
    // var mapper = new Mapper(this);
};
He.prototype = {
    constructor: He,
    /**
     * 给数据添加监听器的方法
     */
    addObserver: function (data) {
        var that = this;
        if (!data || typeof data != 'object') {
            return;
        }
        //循环给每一个数据添加监听器
        Object.keys(data).forEach(function (key) {
            // if ({}.toString.call(data[key]) == '[object Array]') {
            //     //如果待添加监听器的类型是数组
            //     that.addObserver(data[key]);
            // } else if ({}.toString.call(data[key]) == '[object Object]') {
            //     //如果待添加监听器的类型是对象
            //     that.addObserver(data[key]);
            // } else if ({}.toString.call(data[key]) == '[object String]' || {}.toString.call(data[key]) == '[object Number]') {
            //     that._observer(data, key, data[key]);
            // } else {
            //     console.error('不支持的数据类型');
            //     return;
            // }
            that._observer(data, key, data[key]);
        });
    },
    _observer: function (data, key, val) {
        var that = this;
        that.addObserver(data[key]);
        Object.defineProperty(data, key, {
            get: function () {
                return val;
            },
            set: function (newValue) {
                if (val === newValue) return;
                console.log(key + ":" + val + "==>" + newValue);
                val = newValue;
            },
            configurable: false,//是否允许删除该属性
            enumerable: true//是否允许被枚举
        });
    }
};

function parseDom(html) {
    var objE = document.createElement("div");
    objE.innerHTML = html;
    return objE;
}

var template =
    '<div id="testdiv">sss{{test.name}}213123{{test.age}}aaa</div>';

window.testdada = {
    test:{
        name:123123,
        age:1233
    }
};


var he = new He({
    el: parseDom(template),
    data: window.testdada
});


